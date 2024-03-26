<?php

namespace Drupal\poll;

use Drupal\Core\Cache\CacheTagsInvalidatorInterface;
use Drupal\Core\Database\Connection;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Controller class for poll vote storage.
 */
class PollVoteStorage implements PollVoteStorageInterface {

  /**
   * The database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected Connection $connection;

  /**
   * The cache tags invalidator.
   *
   * @var \Drupal\Core\Cache\CacheTagsInvalidatorInterface
   */
  protected CacheTagsInvalidatorInterface $cacheTagsInvalidator;

  /**
   * The current user.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected AccountProxyInterface $currentUser;

  /**
   * The request stack.
   *
   * @var \Symfony\Component\HttpFoundation\RequestStack
   */
  protected RequestStack $requestStack;

  /**
   * The poll vote for the current user keyed by Poll ID and User ID.
   *
   * @var array[]
   */
  protected array $currentUserVote = [];

  /**
   * Constructs a new PollVoteStorage.
   *
   * @param \Drupal\Core\Database\Connection $connection
   *   A Database connection to use for reading and writing database data.
   * @param \Drupal\Core\Cache\CacheTagsInvalidatorInterface $cache_tags_invalidator
   *   The cache tags invalidator.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   The current user.
   * @param \Symfony\Component\HttpFoundation\RequestStack $request_stack
   *   The current request.
   */
  public function __construct(Connection $connection, CacheTagsInvalidatorInterface $cache_tags_invalidator, AccountProxyInterface $current_user, RequestStack $request_stack) {
    $this->connection = $connection;
    $this->cacheTagsInvalidator = $cache_tags_invalidator;
    $this->currentUser = $current_user;
    $this->requestStack = $request_stack;
  }

  /**
   * {@inheritdoc}
   */
  public function deleteChoicesVotes(array $choices) {
    $this->connection->delete('poll_vote')
      ->condition('chid', $choices, 'IN')
      ->execute();
  }

  /**
   * {@inheritdoc}
   */
  public function deleteVotes(PollInterface $poll) {
    $this->connection->delete('poll_vote')->condition('pid', $poll->id())
      ->execute();

    // Deleting a vote means that any cached vote might not be updated in the
    // UI, so we need to invalidate them all.
    $this->cacheTagsInvalidator->invalidateTags(['poll-votes:' . $poll->id()]);
    // Invalidate the static cache of votes.
    $this->currentUserVote = [];
  }

  /**
   * {@inheritdoc}
   */
  public function cancelVote(PollInterface $poll, AccountInterface $account = NULL) {
    if ($account->id()) {
      $this->connection->delete('poll_vote')
        ->condition('pid', $poll->id())
        ->condition('uid', $account->id())
        ->execute();
    }
    else {
      $this->connection->delete('poll_vote')
        ->condition('pid', $poll->id())
        ->condition('uid', $this->currentUser->id())
        ->condition('hostname', $this->requestStack->getCurrentRequest()->getClientIp())
        ->execute();
    }

    // Deleting a vote means that any cached vote might not be updated in the
    // UI, so we need to invalidate them all.
    $this->cacheTagsInvalidator->invalidateTags(['poll-votes:' . $poll->id()]);
    // Invalidate the static cache of votes.
    $this->currentUserVote = [];
  }

  /**
   * {@inheritdoc}
   */
  public function saveVote(array $options) {
    if (!is_array($options)) {
      return;
    }
    $this->connection->insert('poll_vote')->fields($options)->execute();

    // Deleting a vote means that any cached vote might not be updated in the
    // UI, so we need to invalidate them all.
    $this->cacheTagsInvalidator->invalidateTags(['poll-votes:' . $options['pid']]);
    // Invalidate the static cache of votes.
    $this->currentUserVote = [];
  }

  /**
   * {@inheritdoc}
   */
  public function getVotes(PollInterface $poll) {
    $votes = [];
    // Set votes for all options to 0.
    $options = $poll->getOptions();
    foreach ($options as $id => $label) {
      $votes[$id] = 0;
    }

    $result = $this->connection->query('SELECT chid, COUNT(chid) AS votes FROM {poll_vote} WHERE pid = :pid GROUP BY chid', [':pid' => $poll->id()]);
    // Replace the count for options that have recorded votes in the database.
    foreach ($result as $row) {
      $votes[$row->chid] = $row->votes;
    }

    return $votes;
  }

  /**
   * {@inheritdoc}
   */
  public function getUserVote(PollInterface $poll) {
    $uid = $this->currentUser->id();
    $key = $poll->id() . ':' . $uid;
    if (isset($this->currentUserVote[$key])) {
      return $this->currentUserVote[$key];
    }
    $this->currentUserVote[$key] = FALSE;
    if ($uid || $poll->getAnonymousVoteAllow()) {
      if ($uid) {
        $query = $this->connection->query('SELECT * FROM {poll_vote} WHERE pid = :pid AND uid = :uid', [
          ':pid' => $poll->id(),
          ':uid' => $uid,
        ]);
      }
      else {
        $query = $this->connection->query('SELECT * FROM {poll_vote} WHERE pid = :pid AND hostname = :hostname AND uid = 0', [
          ':pid' => $poll->id(),
          ':hostname' => $this->requestStack->getCurrentRequest()->getClientIp(),
        ]);
      }
      $this->currentUserVote[$key] = $query->fetchAssoc();
    }
    return $this->currentUserVote[$key];
  }

  /**
   * {@inheritdoc}
   */
  public function getTotalVotes(PollInterface $poll) {
    $query = $this->connection->query('SELECT COUNT(chid) FROM {poll_vote} WHERE pid = :pid', [':pid' => $poll->id()]);
    return $query->fetchField();
  }

  /**
   * {@inheritdoc}
   */
  public function getListUsers(PollInterface $poll) {
    $list = array();

    $options = $poll->getOptions();
    foreach ($options as $chid => $label) {

    $result = $this->connection->query("SELECT usr.name as names,
    usr.uid as userid
    FROM {poll_vote} pol
    inner join {users_field_data} usr
    ON pol.uid = usr.uid
    WHERE pol.pid = :pid
    and pol.chid = :chid
    order by names asc", array(':pid' => $poll->id(), ':chid' => $chid ));

    $namesStr = array();
    foreach ($result as $row) {
      //$namesStr = $namesStr . " | " . $row->names;
      array_push($namesStr, array($row->userid, $row->names));
    }
    $list[$chid] = $namesStr;

    }
    return $list;
  }

}

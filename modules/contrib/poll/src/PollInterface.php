<?php

namespace Drupal\poll;

use Drupal\Core\Entity\ContentEntityInterface;

/**
 * Provides an interface defining an poll entity.
 */
interface PollInterface extends ContentEntityInterface {

  /**
   * Denotes that the poll is not published.
   */
  const NOT_PUBLISHED = 0;

  /**
   * Denotes that the poll is published.
   */
  const PUBLISHED = 1;

  /**
   * Sets the question for the poll.
   *
   * @param string $question
   *   The question of the poll.
   *
   * @return \Drupal\poll\PollInterface
   *   The class instance that this method is called on.
   */
  public function setQuestion($question);

  /**
   * Return when the poll was modified last time.
   *
   * @return int
   *   The timestamp of the last time the poll was modified.
   */
  public function getCreated();

  /**
   * Sets the last modification of the poll.
   *
   * @param int $created
   *   The timestamp when the poll was modified.
   *
   * @return \Drupal\poll\PollInterface
   *   The class instance that this method is called on.
   */
  public function setCreated($created);

  /**
   * Returns the runtime of the poll in seconds.
   *
   * @return int
   *   The refresh rate of the poll in seconds.
   */
  public function getRuntime();

  /**
   * Sets the runtime of the poll in seconds.
   *
   * @param int $runtime
   *   The refresh rate of the poll in seconds.
   *
   * @return \Drupal\poll\PollInterface
   *   The class instance that this method is called on.
   */
  public function setRuntime($runtime);

  /**
   * Return if an anonymous user is allowed to vote.
   *
   * @return bool
   *   True if allowed, false otherwiwe.
   */
  public function getAnonymousVoteAllow();

  /**
   * Sets if an anonymous user is allowed to vote.
   *
   * @param bool $anonymous_vote_allow
   *   True if allowed, false otherwise.
   *
   * @return \Drupal\poll\PollInterface
   *   The class instance that this method is called on.
   */
  public function setAnonymousVoteAllow($anonymous_vote_allow);

  /**
   * Returns if the user is allowed to cancel their vote.
   *
   * @return bool
   *   True if allowed, false otherwise.
   */
  public function getCancelVoteAllow();

  /**
   * Sets if the user is allowed to cancel their vote.
   *
   * @param bool $cancel_vote_allow
   *   True if allowed, false otherwise.
   *
   * @return \Drupal\poll\PollInterface
   *   The class instance that this method is called on.
   */
  public function setCancelVoteAllow($cancel_vote_allow);

  /**
   * Returns if the user is allowed to view the poll results.
   *
   * @return bool
   *   True if allowed, false otherwise.
   */
  public function getResultVoteAllow();

  /**
   * Sets if the user is allowed to view the poll results.
   *
   * @param bool $result_vote_allow
   *   True if allowed, false otherwise.
   *
   * @return \Drupal\poll\PollInterface
   *   The class instance that this method is called on.
   */
  public function setResultVoteAllow($result_vote_allow);

  /**
   * Returns if the poll is open.
   *
   * @return bool
   *   TRUE if the poll is open.
   */
  public function isOpen();

  /**
   * Returns if the poll is closed.
   *
   * @return bool
   *   TRUE if the poll is closed.
   */
  public function isClosed();

  /**
   * Sets the poll to closed.
   */
  public function close();

  /**
   * Sets the poll to open.
   */
  public function open();

  /**
   * Returns whether or not auto submit should be used in the voting form.
   *
   * @return bool
   *   Whether or not auto submit should be used in the voting form.
   */
  public function getAutoSubmit();

  /**
   * Sets whether or not auto submit should be used in the voting form.
   *
   * @param bool $submit
   *   Wheter or not the poll should have auto submit enabled.
   *
   * @return \Drupal\poll\PollInterface
   *   The class instance that this method is called on.
   */
  public function setAutoSubmit($submit);

  /**
   * Returns whether the user has voted for this poll.
   *
   * @return array|false
   *   An associative array of vote data when available, or FALSE.
   *
   * @todo Refactor - doesn't belong here.
   */
  public function hasUserVoted();

  /**
   * Get all options for this poll.
   *
   * @return array
   *   Associative array of option keys and values.
   */
  public function getOptions();

  /**
   * Get the values of each vote option for this poll.
   *
   * @return array
   *   Associative array of option values.
   */
  public function getOptionValues();

  /**
   * Get all the votes of this poll.
   *
   * @return array
   *   An associative array of vote data keyed by choice id.
   */
  public function getVotes();


  /**
   * Get all the users of this poll with the same choice.
   *
   * @return array
   */
  public function getListUsers();

}

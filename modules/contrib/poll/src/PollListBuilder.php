<?php

namespace Drupal\poll;

use Drupal\Core\Config\Entity\DraggableListBuilder;
use Drupal\Core\Datetime\DateFormatterInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Defines a class to build a listing of user role entities.
 *
 * @see \Drupal\user\Entity\Role
 */
class PollListBuilder extends DraggableListBuilder {

  /**
   * The date formatter service.
   *
   * @var \Drupal\Core\Datetime\DateFormatterInterface
   */
  protected DateFormatterInterface $dateFormatter;

  /**
   * {@inheritdoc}
   */
  public static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type) {
    $instance = parent::createInstance($container, $entity_type);
    $instance->dateFormatter = $container->get('date.formatter');
    return $instance;
  }

  /**
   * {@inheritdoc}
   */
  public function load() {
    $entities = $this->storage->loadMultiple();

    // Sort the entities using the entity class's sort() method.
    // See \Drupal\Core\Config\Entity\ConfigEntityBase::sort().
    uasort($entities, [$this->entityType->getClass(), 'sort']);
    return $entities;
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'poll_list_form';
  }

  /**
   * Overrides Drupal\Core\Entity\EntityListController::buildHeader().
   */
  public function buildHeader() {

    $header['question'] = $this->t('Question');
    $header['author'] = $this->t('Author');
    $header['votes'] = $this->t('Votes');
    $header['status'] = $this->t('Status');
    $header['created'] = $this->t('Created');
    $header['operations'] = $this->t('Operations');
    return $header + parent::buildHeader();
  }

  /**
   * Overrides Drupal\Core\Entity\EntityListController::buildRow().
   */
  public function buildRow(EntityInterface $entity) {
    $row['question'] = $entity->toLink()->toString();
    $row['author']['data'] = [
      '#theme' => 'username',
      '#account' => $entity->getOwner(),
    ];
    // $row['votes'] = $vote_storage->getTotalVotes($entity);
    $row['status'] = ($entity->isOpen()) ? $this->t('Y') : $this->t('N');
    $row['created'] = ($entity->getCreated()) ? $this->dateFormatter->format($entity->getCreated(), 'long') : $this->t('n/a');
    return $row + parent::buildRow($entity);
  }

  /**
   * {@inheritdoc}
   */
  public function getOperations(EntityInterface $entity) {
    $operations = parent::getOperations($entity);

    return $operations;
  }

}

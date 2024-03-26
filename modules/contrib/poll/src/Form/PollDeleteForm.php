<?php

namespace Drupal\poll\Form;

use Drupal\Core\Entity\ContentEntityConfirmFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;

/**
 * Provides a form for deleting a poll.
 */
class PollDeleteForm extends ContentEntityConfirmFormBase {

  /**
   * {@inheritdoc}
   */
  public function getDescription() {
    return $this->t('All associated votes will be deleted too. This action cannot be undone.');
  }

  /**
   * {@inheritdoc}
   */
  public function getQuestion() {
    return $this->t('Are you sure you want to delete this poll %poll', ['%poll' => $this->entity->label()]);
  }

  /**
   * {@inheritdoc}
   */
  public function getCancelUrl() {
    return new Url('poll.poll_list');
  }

  /**
   * {@inheritdoc}
   */
  public function getConfirmText() {
    return $this->t('Delete');
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->entity->delete();
    $this->logger('poll')->notice('Poll %poll deleted.', ['%poll' => $this->entity->label()]);
    $this->messenger()->addMessage($this->t('The poll %poll has been deleted.', ['%poll' => $this->entity->label()]));
    $form_state->setRedirect('poll.poll_list');
  }

}

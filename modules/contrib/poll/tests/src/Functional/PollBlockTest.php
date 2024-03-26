<?php

namespace Drupal\Tests\poll\Functional;

use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Tests the recent poll block.
 *
 * @group poll
 */
class PollBlockTest extends PollTestBase {

  use StringTranslationTrait;

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = ['block'];

  /**
   * {@inheritdoc}
   */
  public function setUp(): void {
    parent::setUp();

    // Enable the recent poll block.
    $this->drupalPlaceBlock('poll_recent_block');
  }

  /**
   * Tests creating, viewing, voting on recent poll block.
   */
  public function testRecentBlock() {

    $poll = $this->poll;
    $user = $this->webUser;

    // Verify poll appears in a block.
    $this->drupalLogin($user);
    $this->drupalGet('user');

    // If a 'block' view not generated, this title would not appear even though
    // the choices might.
    $this->assertSession()->pageTextContains($poll->label());
    $options = $poll->getOptions();
    foreach ($options as $option) {
      $this->assertSession()->pageTextContains($option);
    }

    // Verify we can vote via the block.
    $edit = [
      'choice' => '1',
    ];
    $this->drupalGet('user/' . $this->webUser->id());
    $this->submitForm($edit, 'Vote');
    $this->assertSession()->pageTextContains('Your vote has been recorded.');
    $this->assertSession()->pageTextContains('Total votes: 1');

    // Close the poll and verify block doesn't appear.
    $poll->close();
    $poll->save();
    $this->drupalGet('user/' . $user->id());
    $this->assertSession()->pageTextNotContains($poll->label());
  }

}

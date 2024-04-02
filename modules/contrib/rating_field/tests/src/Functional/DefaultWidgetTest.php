<?php

namespace Drupal\Tests\rating_field\Functional;

use Drupal\field\Entity\FieldConfig;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\Tests\BrowserTestBase;

/**
 * Tests the creation of rating_widget.
 *
 * @group rating_field
 */
class DefaultWidgetTest extends BrowserTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = [
    'field',
    'node',
    'rating_field',
  ];

  /**
   * A user with permission to create pages.
   *
   * @var \Drupal\user\UserInterface
   */
  protected $webUser;

  /**
   * EntityTypeManager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The default theme.
   *
   * @var string
   */
  protected $defaultTheme = 'stark';

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    $this->entityTypeManager = $this->container->get('entity_type.manager');

    $this->drupalCreateContentType(['type' => 'page']);
    $this->webUser = $this->drupalCreateUser(['create page content', 'edit own page content']);
    $this->drupalLogin($this->webUser);

    // Add the rating_field field to the page content type.
    FieldStorageConfig::create([
      'field_name' => 'test_rating',
      'entity_type' => 'node',
      'type' => 'rating_field',
      'settings' => [
        'group_1_response' => [
          'input_radios' => 1,
          'option_1' => [
            'max_value_rating' => 4,
            'numeric_include_zero' => FALSE,
          ],
          'option_2' => [
            'custom_scale_values' => [
              0 => 'Value 1',
              1 => 'Value 2',
              2 => 'Value 3',
            ],
          ],
          'include_na_option' => FALSE,
        ],
        'question_values' => ['Question A', 'Question B'],
      ],
    ])->save();

    FieldConfig::create([
      'field_name' => 'test_rating',
      'label' => 'Rating Field Number',
      'entity_type' => 'node',
      'bundle' => 'page',
    ])->save();

    $this->entityTypeManager->getStorage('entity_form_display')
      ->load('node.page.default')
      ->setComponent('test_rating', [
        'type' => 'rating_widget',
        'settings' => [],
      ])
      ->save();

  }

  /**
   * Test to confirm the widget is setup.
   *
   * @covers \Drupal\rating_field\Plugin\Field\FieldWidget\RatingWidgetBase::formElement
   */
  public function testRatingWidget() {
    $this->drupalGet('node/add/page');
    $this->assertSession()->fieldValueEquals("edit-test-rating-0-0", NULL);
    $this->assertSession()->fieldValueEquals("edit-test-rating-0-1", NULL);
    $this->assertSession()->fieldValueEquals("edit-test-rating-0-2", NULL);
    $this->assertSession()->fieldValueEquals("edit-test-rating-0-3", NULL);
    $this->assertSession()->fieldValueEquals("edit-test-rating-1-0", NULL);
    $this->assertSession()->fieldValueEquals("edit-test-rating-1-1", NULL);
    $this->assertSession()->fieldValueEquals("edit-test-rating-1-2", NULL);
    $this->assertSession()->fieldValueEquals("edit-test-rating-1-3", NULL);
    $this->assertSession()->fieldValueEquals("test_rating-row-0", NULL);
    $this->assertSession()->fieldValueEquals("test_rating-row-1", NULL);
  }

}

<?php

namespace Drupal\nextgen_ui\Dashboard;

use Drupal\Core\Url;

/**
 * Class DashboardManager
 * @package Drupal\nextgen_ui\Dashboard
 */
class DashboardManager {
  public function build() {
    $output = [
      '#theme' => 'nextgen_ui_shell',
      '#header' => true,
      '#attached' => [
        'library' => ['nextgen_ui/nextgen_ui']
      ]
    ];

    return $output;
  }
}

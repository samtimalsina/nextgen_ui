<?php
declare(strict_types=1);

namespace Drupal\nextgen_ui;

use Exception;
use Drupal\Core\Extension\Exception\UnknownExtensionException;

/**
 * Class LibraryManager
 * @package Drupal\nextgen_ui
 */
class LibraryManager {

  /**
   * @param $module_name
   * @return array
   * @throws Exception
   */
  public static function buildInfo($module_name) {
    $libraries = [];

    try {
      $module = \Drupal::moduleHandler()->getModule($module_name);
      if ($package = file_get_contents($module->getPath() . '/package.json')) {
        $package_json = json_decode($package);
        $js_module_name = $package_json->name;
        if (isset($package_json->module)) {
          $libraries[$js_module_name] = [
            'title' => $js_module_name,
            'version' => $package_json->version,
            'license' => [
              'name' => $package_json->license,
            ],
            'js' => [
              $package_json->module => [
                'type' => 'file',
                'attributes' => [
                  'type' => 'module'
                ]
              ],
            ],
          ];
        }
      }
    } catch (UnknownExtensionException $exception) {
      throw new Exception($exception->getMessage());
    }

    return $libraries;
  }
}

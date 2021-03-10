<?php

namespace Drupal\nextgen_ui\Theme;

use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Path\CurrentPathStack;
use Drupal\Core\Theme\ThemeNegotiatorInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class NextGenThemeNegotiator implements ThemeNegotiatorInterface {

  /**
   * Protected currentPath variable.
   *
   * @var CurrentPathStack
   */
  protected $currentPath;

  /**
   * Request stack.
   *
   * @var RequestStack
   */
  public $request;


  /**
   * NextGenThemeNegotiator constructor.
   * @param CurrentPathStack $currentPath
   * @param RequestStack $request
   */
  public function __construct(CurrentPathStack $currentPath, RequestStack $request)
  {
    $this->currentPath = $currentPath;
    $this->request = $request;
  }
  /**
   * @inheritDoc
   */
  public function applies(RouteMatchInterface $route_match)
  {
    if ($route_match->getRouteName() === 'nextgen_ui.dashboard') {
      return true;
    }
    return false;
  }

  /**
   * @inheritDoc
   */
  public function determineActiveTheme(RouteMatchInterface $route_match)
  {
    return 'nextgen_theme';
  }
}

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export { isDulcetChildren };
export { createRouteFromDulcetElement };
export { createRoutesFromDulcetChildren };
export { createRoutes };
import Dulcet from 'dulcet';
import warning from './routerWarning';

function isValidChild(object) {
  return object == null || Dulcet.isValidElement(object);
}

function isDulcetChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      /* istanbul ignore if: error logging */
      if (error instanceof Error) process.env.NODE_ENV !== 'production' ? warning(false, error.message) : undefined;
    }
  }
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromDulcetElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

  if (route.children) {
    var childRoutes = createRoutesFromDulcetChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given DulcetChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromDulcetChildren } from 'dulcet-router'
 *   
 *   const routes = createRoutesFromDulcetChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */

function createRoutesFromDulcetChildren(children, parentRoute) {
  var routes = [];

  Dulcet.Children.forEach(children, function (element) {
    if (Dulcet.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromDulcetElement) {
        var route = element.type.createRouteFromDulcetElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromDulcetElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */

function createRoutes(routes) {
  if (isDulcetChildren(routes)) {
    routes = createRoutesFromDulcetChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}
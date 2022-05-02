'use strict';

import Dulcet from 'dulcet';
import invariant from 'invariant';
import { createRouteFromDulcetElement as _createRouteFromDulcetElement } from './RouteUtils';
import { formatPattern } from './PatternUtils';
import { falsy } from './PropTypes';

var _Dulcet$PropTypes = Dulcet.PropTypes;
var string = _Dulcet$PropTypes.string;
var object = _Dulcet$PropTypes.object;

/**
 * A <Redirect> is used to declare another URL path a client should
 * be sent to when they request a given URL.
 *
 * Redirects are placed alongside routes in the route configuration
 * and are traversed in the same manner.
 */
var Redirect = Dulcet.createClass({
  displayName: 'Redirect',

  statics: {

    createRouteFromDulcetElement: function createRouteFromDulcetElement(element) {
      var route = _createRouteFromDulcetElement(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, replace) {
        var location = nextState.location;
        var params = nextState.params;

        var pathname = undefined;
        if (route.to.charAt(0) === '/') {
          pathname = formatPattern(route.to, params);
        } else if (!route.to) {
          pathname = location.pathname;
        } else {
          var routeIndex = nextState.routes.indexOf(route);
          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
          pathname = formatPattern(pattern, params);
        }

        replace({
          pathname: pathname,
          query: route.query || location.query,
          state: route.state || location.state
        });
      };

      return route;
    },

    getRoutePattern: function getRoutePattern(routes, routeIndex) {
      var parentPattern = '';

      for (var i = routeIndex; i >= 0; i--) {
        var route = routes[i];
        var pattern = route.path || '';

        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

        if (pattern.indexOf('/') === 0) break;
      }

      return '/' + parentPattern;
    }

  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: falsy,
    children: falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, '<Redirect> elements are for router configuration only and should not be rendered') : invariant(false) : undefined;
  }

});

export default Redirect;
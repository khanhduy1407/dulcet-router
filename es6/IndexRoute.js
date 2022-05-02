'use strict';

import Dulcet from 'dulcet';
import warning from './routerWarning';
import invariant from 'invariant';
import { createRouteFromDulcetElement as _createRouteFromDulcetElement } from './RouteUtils';
import { component, components, falsy } from './PropTypes';

var func = Dulcet.PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */
var IndexRoute = Dulcet.createClass({
  displayName: 'IndexRoute',

  statics: {

    createRouteFromDulcetElement: function createRouteFromDulcetElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _createRouteFromDulcetElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? warning(false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
      }
    }

  },

  propTypes: {
    path: falsy,
    component: component,
    components: components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : invariant(false) : undefined;
  }

});

export default IndexRoute;
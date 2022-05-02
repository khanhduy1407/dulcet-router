'use strict';

import Dulcet from 'dulcet';
import invariant from 'invariant';
import { createRouteFromDulcetElement } from './RouteUtils';
import { component, components } from './PropTypes';

var _Dulcet$PropTypes = Dulcet.PropTypes;
var string = _Dulcet$PropTypes.string;
var func = _Dulcet$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */
var Route = Dulcet.createClass({
  displayName: 'Route',

  statics: {
    createRouteFromDulcetElement: createRouteFromDulcetElement
  },

  propTypes: {
    path: string,
    component: component,
    components: components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, '<Route> elements are for router configuration only and should not be rendered') : invariant(false) : undefined;
  }

});

export default Route;
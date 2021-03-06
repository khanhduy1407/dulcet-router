'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dulcet = require('dulcet');

var _dulcet2 = _interopRequireDefault(_dulcet);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PropTypes = require('./PropTypes');

var _Dulcet$PropTypes = _dulcet2['default'].PropTypes;
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
var Route = _dulcet2['default'].createClass({
  displayName: 'Route',

  statics: {
    createRouteFromDulcetElement: _RouteUtils.createRouteFromDulcetElement
  },

  propTypes: {
    path: string,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
  }

});

exports['default'] = Route;
module.exports = exports['default'];
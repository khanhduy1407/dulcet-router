'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dulcet = require('dulcet');

var _dulcet2 = _interopRequireDefault(_dulcet);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PropTypes = require('./PropTypes');

var func = _dulcet2['default'].PropTypes.func;

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */
var IndexRoute = _dulcet2['default'].createClass({
  displayName: 'IndexRoute',

  statics: {

    createRouteFromDulcetElement: function createRouteFromDulcetElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _RouteUtils.createRouteFromDulcetElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
      }
    }

  },

  propTypes: {
    path: _PropTypes.falsy,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
  }

});

exports['default'] = IndexRoute;
module.exports = exports['default'];
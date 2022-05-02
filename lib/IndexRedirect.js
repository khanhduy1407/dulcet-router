'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dulcet = require('dulcet');

var _dulcet2 = _interopRequireDefault(_dulcet);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Redirect = require('./Redirect');

var _Redirect2 = _interopRequireDefault(_Redirect);

var _PropTypes = require('./PropTypes');

var _Dulcet$PropTypes = _dulcet2['default'].PropTypes;
var string = _Dulcet$PropTypes.string;
var object = _Dulcet$PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */
var IndexRedirect = _dulcet2['default'].createClass({
  displayName: 'IndexRedirect',

  statics: {

    createRouteFromDulcetElement: function createRouteFromDulcetElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = _Redirect2['default'].createRouteFromDulcetElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
      }
    }

  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _PropTypes.falsy,
    children: _PropTypes.falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
  }

});

exports['default'] = IndexRedirect;
module.exports = exports['default'];
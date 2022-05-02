'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dulcet = require('dulcet');

var _dulcet2 = _interopRequireDefault(_dulcet);

var _RouterContext = require('./RouterContext');

var _RouterContext2 = _interopRequireDefault(_RouterContext);

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var RoutingContext = _dulcet2['default'].createClass({
  displayName: 'RoutingContext',

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? _routerWarning2['default'](false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'dulcet-router\'`.') : undefined;
  },

  render: function render() {
    return _dulcet2['default'].createElement(_RouterContext2['default'], this.props);
  }
});

exports['default'] = RoutingContext;
module.exports = exports['default'];
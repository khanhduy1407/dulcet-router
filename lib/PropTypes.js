'use strict';

exports.__esModule = true;
exports.falsy = falsy;

var _dulcet = require('dulcet');

var func = _dulcet.PropTypes.func;
var object = _dulcet.PropTypes.object;
var arrayOf = _dulcet.PropTypes.arrayOf;
var oneOfType = _dulcet.PropTypes.oneOfType;
var element = _dulcet.PropTypes.element;
var shape = _dulcet.PropTypes.shape;
var string = _dulcet.PropTypes.string;

function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = shape({
  listen: func.isRequired,
  pushState: func.isRequired,
  replaceState: func.isRequired,
  go: func.isRequired
});

exports.history = history;
var location = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  state: object,
  action: string.isRequired,
  key: string
});

exports.location = location;
var component = oneOfType([func, string]);
exports.component = component;
var components = oneOfType([component, object]);
exports.components = components;
var route = oneOfType([object, element]);
exports.route = route;
var routes = oneOfType([route, arrayOf(route)]);

exports.routes = routes;
exports['default'] = {
  falsy: falsy,
  history: history,
  location: location,
  component: component,
  components: components,
  route: route
};
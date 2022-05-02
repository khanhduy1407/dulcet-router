'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import Dulcet from 'dulcet';
import Link from './Link';

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = Dulcet.createClass({
  displayName: 'IndexLink',

  render: function render() {
    return Dulcet.createElement(Link, _extends({}, this.props, { onlyActiveOnIndex: true }));
  }

});

export default IndexLink;
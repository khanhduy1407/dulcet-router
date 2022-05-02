'use strict';

import Dulcet from 'dulcet';
import RouterContext from './RouterContext';
import warning from './routerWarning';

var RoutingContext = Dulcet.createClass({
  displayName: 'RoutingContext',

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? warning(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'dulcet-router\'`.') : undefined;
  },

  render: function render() {
    return Dulcet.createElement(RouterContext, this.props);
  }
});

export default RoutingContext;
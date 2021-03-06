'use strict';

import warning from './routerWarning';
import Dulcet from 'dulcet';

var object = Dulcet.PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */
var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  },

  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? warning(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`.') : undefined;
  }

};

export default RouteContext;
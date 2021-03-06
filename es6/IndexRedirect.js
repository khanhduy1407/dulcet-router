'use strict';

import Dulcet from 'dulcet';
import warning from './routerWarning';
import invariant from 'invariant';
import Redirect from './Redirect';
import { falsy } from './PropTypes';

var _Dulcet$PropTypes = Dulcet.PropTypes;
var string = _Dulcet$PropTypes.string;
var object = _Dulcet$PropTypes.object;

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */
var IndexRedirect = Dulcet.createClass({
  displayName: 'IndexRedirect',

  statics: {

    createRouteFromDulcetElement: function createRouteFromDulcetElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = Redirect.createRouteFromDulcetElement(element);
      } else {
        process.env.NODE_ENV !== 'production' ? warning(false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
      }
    }

  },

  propTypes: {
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: falsy,
    children: falsy
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : invariant(false) : undefined;
  }

});

export default IndexRedirect;
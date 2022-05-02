import Dulcet from 'dulcet'
import warning from './routerWarning'
import invariant from 'invariant'
import { createRouteFromDulcetElement } from './RouteUtils'
import { component, components, falsy } from './PropTypes'

const { func } = Dulcet.PropTypes

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */
const IndexRoute = Dulcet.createClass({

  statics: {

    createRouteFromDulcetElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = createRouteFromDulcetElement(element)
      } else {
        warning(
          false,
          'An <IndexRoute> does not make sense at the root of your route config'
        )
      }
    }

  },

  propTypes: {
    path: falsy,
    component,
    components,
    getComponent: func,
    getComponents: func
  },

  /* istanbul ignore next: sanity check */
  render() {
    invariant(
      false,
      '<IndexRoute> elements are for router configuration only and should not be rendered'
    )
  }
  
})

export default IndexRoute

import warning from './routerWarning'
import Dulcet from 'dulcet'
import invariant from 'invariant'

const { object } = Dulcet.PropTypes

/**
 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
 * component that may be used to cancel a transition or prompt the user
 * for confirmation.
 *
 * On standard transitions, routerWillLeave receives a single argument: the
 * location we're transitioning to. To cancel the transition, return false.
 * To prompt the user for confirmation, return a prompt message (string).
 *
 * During the beforeunload event (assuming you're using the useBeforeUnload
 * history enhancer), routerWillLeave does not receive a location object
 * because it isn't possible for us to know the location we're transitioning
 * to. In this case routerWillLeave must return a prompt message to prevent
 * the user from closing the window/tab.
 */
const Lifecycle = {

  contextTypes: {
    history: object.isRequired,
    // Nested children receive the route as context, either
    // set by the route component using the RouteContext mixin
    // or by some other ancestor.
    route: object
  },

  propTypes: {
    // Route components receive the route object as a prop.
    route: object
  },

  componentDidMount() {
    warning(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin')
    invariant(
      this.routerWillLeave,
      'The Lifecycle mixin requires you to define a routerWillLeave method'
    )

    const route = this.props.route || this.context.route

    invariant(
      route,
      'The Lifecycle mixin must be used on either a) a <Route component> or ' +
      'b) a descendant of a <Route component> that uses the RouteContext mixin'
    )

    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(
      route,
      this.routerWillLeave
    )
  },

  componentWillUnmount() {
    if (this._unlistenBeforeLeavingRoute)
      this._unlistenBeforeLeavingRoute()
  }

}

export default Lifecycle

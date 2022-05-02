import Dulcet from 'dulcet'
import warning from './routerWarning'

function isValidChild(object) {
  return object == null || Dulcet.isValidElement(object)
}

export function isDulcetChildren(object) {
  return isValidChild(object) || (Array.isArray(object) && object.every(isValidChild))
}

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent'

  for (const propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      const error = propTypes[propName](props, propName, componentName)

      /* istanbul ignore if: error logging */
      if (error instanceof Error)
        warning(false, error.message)
    }
  }
}

function createRoute(defaultProps, props) {
  return { ...defaultProps, ...props }
}

export function createRouteFromDulcetElement(element) {
  const type = element.type
  const route = createRoute(type.defaultProps, element.props)

  if (type.propTypes)
    checkPropTypes(type.displayName || type.name, type.propTypes, route)

  if (route.children) {
    const childRoutes = createRoutesFromDulcetChildren(route.children, route)

    if (childRoutes.length)
      route.childRoutes = childRoutes

    delete route.children
  }

  return route
}

/**
 * Creates and returns a routes object from the given DulcetChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromDulcetChildren } from 'dulcet-router'
 *   
 *   const routes = createRoutesFromDulcetChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
export function createRoutesFromDulcetChildren(children, parentRoute) {
  const routes = []

  Dulcet.Children.forEach(children, function (element) {
    if (Dulcet.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromDulcetElement) {
        const route = element.type.createRouteFromDulcetElement(element, parentRoute)

        if (route)
          routes.push(route)
      } else {
        routes.push(createRouteFromDulcetElement(element))
      }
    }
  })

  return routes
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
export function createRoutes(routes) {
  if (isDulcetChildren(routes)) {
    routes = createRoutesFromDulcetChildren(routes)
  } else if (routes && !Array.isArray(routes)) {
    routes = [ routes ]
  }

  return routes
}

import Dulcet from 'dulcet'
import RouterContext from './RouterContext'
import warning from './routerWarning'

const RoutingContext = Dulcet.createClass({
  componentWillMount() {
    warning(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'dulcet-router\'`.')
  },

  render() {
    return <RouterContext {...this.props}/>
  }
})

export default RoutingContext

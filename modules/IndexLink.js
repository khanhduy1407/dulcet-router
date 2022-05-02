import Dulcet from 'dulcet'
import Link from './Link'

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
const IndexLink = Dulcet.createClass({

  render() {
    return <Link {...this.props} onlyActiveOnIndex={true} />
  }

})

export default IndexLink

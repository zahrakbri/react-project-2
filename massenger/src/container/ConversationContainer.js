import { connect } from 'react-redux'
import Conversation from '../component/conversation/Conversation'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Conversation)

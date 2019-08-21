import MessageBox from '../component/conversation/MessagesBox'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  messageList: state.messageList
})

export default connect(mapStateToProps)(MessageBox)

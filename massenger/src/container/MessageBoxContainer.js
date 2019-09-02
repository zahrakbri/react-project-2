import MessageBox from '../component/conversation/MessagesBox'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  messageList: state.messageList
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)

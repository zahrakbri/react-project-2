import MessageBox from '../component/conversation/MessagesBox'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  newMessage: state.newMessage
})

export default connect(mapStateToProps)(MessageBox)

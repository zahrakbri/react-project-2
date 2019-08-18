import React from 'react'
import send from '../../send.png'
import { sendNewMessage } from '../../action/conversation'

class Footer extends React.Component {
  constructor () {
    super()

    this.state = {
      newMessage: ''
    }
  }

  handleSend () {
    this.props.dispatch(sendNewMessage(this.state.newMessage))
    this.setState({ newMessage: '' })
  }

  render () {
    return (
      <div className='footer' >
        <input
          type='text'
          placeholder='write...'
          name='newMessage'
          value={this.state.newMessage}
          onChange={(e) => this.setState({ newMessage: e.target.value })}
        />
        <img
          width='30px'
          src={send}
          onClick={() => this.handleSend()}
        />
      </div>
    )
  }
}

export default Footer

import React from 'react'
import MessagesBox from './MessagesBox'

class ChatScreen extends React.Component {
  render () {
    return (
      <div className='chat-screen' >
        <div className='header'>
          header
        </div>
        <MessagesBox />
        <div className='footer' >
          footer
        </div>
      </div>
    )
  }
}

export default ChatScreen

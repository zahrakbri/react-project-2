import React from 'react'
import MessagesBoxContainer from '../../container/MessageBoxContainer'
import HeaderContainer from '../../container/HeaderContainer'
import FooterContainer from '../../container/FooterContainer'

class ChatScreen extends React.Component {
  render () {
    return (
      <div className='chat-screen' >
        <HeaderContainer />
        <MessagesBoxContainer />
        <FooterContainer />
      </div>
    )
  }
}

export default ChatScreen

import React from 'react'
import MessagesBox from './MessagesBox'
import HeaderContainer from '../../container/HeaderContainer'
import Footer from './Footer'

class ChatScreen extends React.Component {
  render () {
    return (
      <div className='chat-screen' >
        <HeaderContainer />
        <MessagesBox />
        <Footer />
      </div>
    )
  }
}

export default ChatScreen

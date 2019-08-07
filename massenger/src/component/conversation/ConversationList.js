import React from 'react'
import Conversation from './Conversation'

class ConversationList extends React.Component {
  render () {
    return (
      <div className='conversation-list'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    )
  }
}

export default ConversationList

import React from 'react'
import Conversation from './Conversation'

class ConversationList extends React.Component {
  render () {
    return (
      <div className='conversation-list'>
        <Conversation
          name='farimah'
          lastName='Ghazi'
          latestMessage='hi!'
        />
        <Conversation name='Aida' lastName='Reza Khani' />
        <Conversation name='Delaram' lastName='Esfahani' />
        <Conversation name='Hadi' lastName='Aziz poor' />
        <Conversation name='Armin' lastName='poolaei' />
      </div>
    )
  }
}

export default ConversationList

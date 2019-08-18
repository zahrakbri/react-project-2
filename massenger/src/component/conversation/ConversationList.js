import React from 'react'
import ConversationContainer from '../../container/ConversationContainer'

class ConversationList extends React.Component {
  constructor () {
    super()

    this.state = {
      conversationList: [
        {
          firstName: 'zahra',
          lastName: 'Masoumi',
          latestMessage: 'Hi',
          unseenMessage: '5',
          profile: 'http://....'
        },
        {
          firstName: 'Aida',
          lastName: 'Rezakhani',
          latestMessage: 'Hi',
          unseenMessage: '3',
          profile: 'http://....'
        },
        {
          firstName: 'zahra',
          lastName: 'Masoumi',
          latestMessage: 'Hi',
          unseenMessage: '0',
          profile: 'http://....'
        },
        {
          firstName: 'Hadi',
          lastName: 'AzizPour',
          latestMessage: 'Hi',
          unseenMessage: '0',
          profile: 'http://....'
        },
        {
          firstName: 'Sharareh',
          lastName: 'Rahimi',
          latestMessage: 'Hi',
          unseenMessage: '6',
          profile: 'http://....'
        }
      ]
    }
  }
  render () {
    return (
      <div className='conversation-list'>
        { this.state.conversationList.map((item, index) => (
          <ConversationContainer
            key={index}
            name={item.firstName}
            lastName={item.lastName}
            latestMessage={item.latestMessage}
            unseenMessage={item.unseenMessage} />
        )
        )

        }
      </div>
    )
  }
}

export default ConversationList

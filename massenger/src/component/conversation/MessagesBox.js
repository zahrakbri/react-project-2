import React from 'react'

class MessagesBox extends React.Component {
  constructor () {
    super()

    this.state = {
      messagesList: [
        {
          text: 'salam',
          date: '3/2',
          sender: 1,
          receiver: 3
        },
        {
          text: 'salam',
          date: '3/2',
          sender: 3,
          receiver: 1
        },
        {
          text: 'khoobi?',
          date: '3/2',
          sender: 1,
          receiver: 3
        },
        {
          text: 'Are',
          date: '3/2',
          sender: 3,
          receiver: 1
        }
      ]
    }
  }
  render () {
    return (
      <div className='messages-box'>
        {
          this.state.messagesList.map((message, index) => {
            if (message.sender === 1) {
              return (
                <div key={index} className='sender' ><span>{message.text}</span></div>
              )
            } else {
              return (
                <div key={index} className='receiver' ><span>{message.text}</span></div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default MessagesBox

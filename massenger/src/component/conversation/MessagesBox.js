import React from 'react'

class MessagesBox extends React.Component {
  // constructor () {
  //   super()

  //   this.state = {
  //     messagesList: [
  //     ]
  //   }
  // }
  render () {
    console.log('propsss:', this.props)
    return (
      <div className='messages-box'>
        {
          this.props.messageList.map((message, index) => {
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

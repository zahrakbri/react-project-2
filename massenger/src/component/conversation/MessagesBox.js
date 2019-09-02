import React from 'react'
import { editMessage } from '../../action/conversation'

class MessagesBox extends React.Component {
  constructor () {
    super()

    this.state = {
      editMode: false,
      selectedMessage: -1
    }
  }

  handleEdit (e, index) {
    this.props.dispatch(editMessage(e.target.value, index))
    this.setState({ editMode: true })
  }

  render () {
    console.log('propsss:', this.props)
    return (
      <div className='messages-box'>
        {
          this.props.messageList.map((message, index) => {
            if (message.sender === 1) {
              if (!(this.state.editMode && this.state.selectedMessage === index)) {
                return (
                  <div key={index} className='sender' >
                    <span
                      style={{ fontSize: '10px' }}
                      onClick={() => this.setState({ editMode: true, selectedMessage: index })}
                    >edit</span>
                    <span>{message.text}</span>
                  </div>
                )
              } else {
                return (
                  <input
                    key={index}
                    value={message.text}
                    onChange={(e) => this.handleEdit(e, index)}
                    onBlur={() => this.setState({ editMode: false })}
                  />
                )
              }
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

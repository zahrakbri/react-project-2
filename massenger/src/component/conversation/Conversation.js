import React from 'react'
import { getUserName } from '../../action/conversation'

class Conversation extends React.Component {
  render () {
    return (
      <div className='conversation' onClick={() => this.props.dispatch(getUserName(this.props.name, this.props.lastName))}>
        <img src='telegram.png' />
        <div>
          <div className='name-date'>
            <span>{this.props.name} {this.props.lastName}</span>
            <span> today</span>
          </div>
          <div className='name-date'>
            <span>{this.props.latestMessage}</span>
            <span className='unseen'> {this.props.unseenMessage}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Conversation

import React from 'react'

class Conversation extends React.Component {
  render () {
    console.log('propssss', this)
    return (
      <div className='conversation'>
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

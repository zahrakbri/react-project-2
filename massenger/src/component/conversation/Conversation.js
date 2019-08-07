import React from 'react'

class Conversation extends React.Component {
  render () {
    return (
      <div className='conversation'>
        <img src='telegram.png' />
        <div>
          <div className='name-date'>
            <span>zahra kabiri</span>
            <span> today</span>
          </div>
          <div className='name-date'>
            <span>hello</span>
            <span className='unseen'> 3</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Conversation

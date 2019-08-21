import React from 'react'
import ConversationContainer from '../../container/ConversationContainer'
import { connect } from 'react-redux'
import { createNewConversation } from '../../action/conversation'

class ConversationList extends React.Component {
  constructor () {
    super()

    this.state = {
      newConv: ''
    }
  }

  handleNewConv (e) {
    this.setState({ newConv: e.target.value })
  }

  handleClick () {
    this.props.dispatch(createNewConversation(this.state.newConv))
    this.setState({ newConv: '' })
  }

  render () {
    console.log('conversationlist props', this.props)
    return (
      <div className='conversation-list'>
        <div>
          <input
            type='text'
            name='newConv'
            value={this.state.newConv}
            onChange={(e) => this.handleNewConv(e)}
          />
          <span
            onClick={() => this.handleClick()}
          >+</span>
        </div>
        { this.props.conversationList.map((item, index) => (
          <ConversationContainer
            key={index}
            name={item.firstName}
            lastName={item.lastName}
            latestMessage={item.latestMessage}
            unseenMessage={item.unseenMessage} />
        )
        )

        }from
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  conversationList: state.conversationList
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList)

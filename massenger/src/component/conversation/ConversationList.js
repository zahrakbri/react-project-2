import React from 'react'
import ConversationContainer from '../../container/ConversationContainer'
import { connect } from 'react-redux'
import { createNewConversation } from '../../action/conversation'
import axios from 'axios'

class ConversationList extends React.Component {
  constructor () {
    super()

    this.state = {
      newConv: '',
      suggestionUsers: [],
      token: window.localStorage.getItem('token')
    }
  }

  handleNewConv (e) {
    this.setState({ newConv: e.target.value })
  }

  handleClick () {
    this.props.dispatch(createNewConversation(this.state.newConv))
    this.setState({ newConv: '' })
  }

  handleSearch (e) {
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)

    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        console.log('data:', response.data)
        this.setState({ suggestionUsers: response.data.data.users })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    console.log('conversationlist props', this.props)
    return (
      <div className='conversation-list'>
        <div>
          <input
            type='text'
            name='newConv'
            onChange={(e) => this.handleSearch(e)}
          />
          {
            this.state.suggestionUsers.map((user, index) => {
              return (
                <p key={user.id}>
                  {user.email}
                </p>
              )
            })
          }

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

        }
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

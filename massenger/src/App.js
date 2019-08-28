import React from 'react'
import './App.css'
import Login from './component/auth/Login'
import Messenger from './component/conversation/Messenger'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './component/auth/SignUp'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import conversation from './reducer/conversation'
import logger from 'redux-logger'

const store = createStore(conversation, applyMiddleware(logger))

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/signup/' exact component={SignUp} />
          <Route path='/messenger/' component={Messenger} />
        </Router>
      </Provider>
    )
  }
}

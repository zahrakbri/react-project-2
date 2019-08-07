import React from 'react'
import './App.css'
// import Login from './component/auth/Login'
import Messenger from './component/conversation/Messenger'

export default class App extends React.Component {
  render () {
    return (
      <Messenger />
    )
  }
}

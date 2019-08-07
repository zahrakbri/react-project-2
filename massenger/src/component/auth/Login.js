import React from 'react'
import logo from '../../logo.svg'

export default class Login extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='50px' style={{ alignSelf: 'center' }} />
          <input type='text' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Login</button>
        </div>
      </div>
    )
  }
}

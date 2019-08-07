import React from 'react'
import logo from '../../logo.svg'

export default class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: 'z@k.com',
      password: ''
    }
  }
  render () {
    console.log('this', this)
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='50px' style={{ alignSelf: 'center' }} />
          <input type='text' placeholder='email' value={this.state.email} />
          <input type='password' placeholder='password' />
          <button>Login</button>
        </div>
      </div>
    )
  }
}

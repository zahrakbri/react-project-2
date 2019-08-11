import React from 'react'
import logo from '../../logo.svg'

export default class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handlePassword (event) {
    this.setState({ password: event.target.value })
  }

  render () {
    console.log('this', this.state)
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='50px' style={{ alignSelf: 'center' }} />
          <input type='text' placeholder='email'
            onChange={(event) => this.setState({ email: event.target.value })}
            onBlur={() => console.log('blur')}
          />
          <input
            type='password'
            onChange={(event) => this.handlePassword(event)}
            placeholder='password' />
          <button onClick={() => console.log('dfghbnjmk')} >Login</button>
        </div>
      </div>
    )
  }
}

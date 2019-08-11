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

  handleChange (event) {
    let name = event.target.name
    console.log('eee', event.target.value)

    this.setState({ [name]: event.target.value }, () => console.log('CALLBACK', this.state.email))
    console.log('email', this.state.email)
  }

  render () {
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='50px' style={{ alignSelf: 'center' }} />
          <input type='text' placeholder='email'
            name='email'
            onChange={(event) => this.handleChange(event)}
            onBlur={() => console.log('blur')}
          />
          <input
            type='password'
            name='password'
            onChange={(event) => this.handleChange(event)}
            placeholder='password' />
          <button onClick={() => console.log('dfghbnjmk')} >Login</button>
        </div>
      </div>
    )
  }
}

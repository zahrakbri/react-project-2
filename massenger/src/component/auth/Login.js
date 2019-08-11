import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/ValidateFunction'

export default class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    let name = event.target.name
    let changeFields = this.state.fields
    changeFields[name] = event.target.value
    this.setState({ fields: changeFields })
    // console.log('eee', event.target.value)
    // this.setState({ [name]: event.target.value }, () => console.log('CALLBACK', this.state.email))
    // console.log('email', this.state.email)
    // let error = validate('email', event.target.value)
    // console.log('errorrr:', error)
  }

  handleError () {
    let errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    console.log('errorrr', errors)
    this.setState({ errors })
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
          { this.state.errors.email !== null &&
            <span className='error'>{this.state.errors.email}</span>
          }
          
          <input
            type='password'
            name='password'
            onChange={(event) => this.handleChange(event)}
            placeholder='password' />
          { this.state.errors.password !== null &&
            <span className='error'>{this.state.errors.password}</span>
          }
          
          <button onClick={() => this.handleError()} >Login</button>
        </div>
      </div>
    )
  }
}

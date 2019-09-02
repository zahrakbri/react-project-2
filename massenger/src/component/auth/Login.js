import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/ValidateFunction'
import axios from 'axios'
import { withRouter } from 'react-router'

class Login extends React.Component {
  constructor (props) {
    super(props)

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

  handleRequest () {
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
      .then((response) => {
        window.localStorage.setItem('token', response.data.data.token)
        this.props.history.push('/messenger/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleEmail (e) {
    this.setState({ ...this.state, fields: { ...this.state.fields, email: e.target.value } })
  }

  render () {
    console.log('pppppp', this.props)
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='50px' style={{ alignSelf: 'center' }} />
          <input type='text' placeholder='email'
            name='email'
            onChange={(e) => this.handleEmail(e)}
            onBlur={() => console.log('blur')}
            className={this.state.errors.email !== null ? 'errorInput' : 'correctInput'}
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
          <button onClick={() => this.handleRequest()} >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)

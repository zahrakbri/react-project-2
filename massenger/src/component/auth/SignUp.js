import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
import Input from './Input'
import axios from 'axios'

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      retypePassword: ''
    }

    this.ParentHandler = this.ParentHandler.bind(this)
  }

  ParentHandler (name, value) {
    console.log('ParentHandler', name, value)
    this.setState({ [name]: value })
  }

  hanleRequest () {
    if (this.state.password === this.state.retypePassword) {
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password
      })
        .then(function (response) {
          console.log('data:', response.data)
          window.localStorage.setItem('token', response.data.token)
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      this.setState({ error: 'invalid password' })
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='50px' style={{ alignSelf: 'center' }} />
          <Input placeholder='email' name='email' PH={this.ParentHandler} />
          <Input placeholder='password' name='password' PH={this.ParentHandler} />
          <Input placeholder='password' name='retypePassword' PH={this.ParentHandler} />

          <button onClick={() => this.hanleRequest()} >
            Sign Up
          </button>
          <p> {this.state.error} </p>
        </div>
      </div>
    )
  }
}

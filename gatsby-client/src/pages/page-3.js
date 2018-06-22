import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email:'',
      submitBtn:'Submit'
    };

  }
  async sendUserInfo(userName, email) {
    await fetch('http://localhost:5000/add/user/', {
      body: JSON.stringify({userName, email}),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  
  handleSubmit (event) {
    event.preventDefault()
    this.sendUserInfo(this.state.userName, this.state.email)
    this.setState({userName: '', email: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
              value={this.state.userName}
              onChange={e => this.setState({ userName: e.target.value })}
              type="text"
              name="userName"
              placeholder="Your name"
            />
          <input
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            name="email"
            placeholder="Your email address"
          />
          <input
            type="submit"
            value= {this.state.submitBtn}
          />
      </form>
    )
  }
}


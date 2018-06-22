import React, { Component } from 'react';

import Link from 'gatsby-link'

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:5000/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div >
        <p>{this.state.response}</p>
        <Link to="/page-3/">Try to submit data to server and get it back </Link>
      </div>
    );
  }
}

export default App;

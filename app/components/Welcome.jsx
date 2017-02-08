import React, { Component } from 'react';
import {Link} from 'react-router';

class Welcome extends Component {
  render() {
    return (
        <div style={{margin: '0 auto', width: '90%', paddingTop: '30vh', textAlign:'center'}}>
            <h1>Hello World!</h1>
            <h2>A React Project</h2>
            <Link to="/">Home</Link>
        </div>
    );
  }
}

export default Welcome;
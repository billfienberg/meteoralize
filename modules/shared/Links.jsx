import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Links extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="other">Other</Link><br/>
        <Link to="settings">Settings</Link><br/>
      </div>
    )
  }
}
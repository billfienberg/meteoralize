import React, { Component } from 'react';
import { Link } from 'react-router';
import Links from '../../shared/Links';

export default class Other extends Component {
  render() {
    return (
      <div>
        <Links />
        <h1>This is the Other component.</h1>
      </div>
    )
  }
}
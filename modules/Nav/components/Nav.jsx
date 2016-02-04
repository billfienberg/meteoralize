import React, { Component } from 'react';
import { Link } from 'react-router';
import AccountsUIWrapper from '../../shared/AccountsUIWrapper';
import Other from '../../Other/components/Other';
import Settings from '../../Settings/components/Settings';
import Home from '../../Home/components/Home';

export default class Nav extends Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">Logo</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="other">Other</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="settings">Settings</Link></li>
            <li><a href="#"><AccountsUIWrapper /></a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="other">Other</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="settings">Settings</Link></li>*/}
            <li><a href="#"><AccountsUIWrapper /></a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
import React, { Component } from 'react';
import AccountsUIWrapper from "../../shared/AccountsUIWrapper";

export default class Nav extends Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <AccountsUIWrapper />
            <li><a href="#">Sass</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <AccountsUIWrapper />
            <li><a href="#">Sass</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
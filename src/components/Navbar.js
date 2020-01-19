import React, { Component } from 'react';
import { compose } from 'recompose';
import withTheme from '../hoc/withTheme';
import withAuth from '../hoc/withAuth';

class Navbar extends Component {
  render() {
    const { syntax, ui } = this.props.theme;
    return (
      <nav style={{ background: ui, color: syntax }}>
        <h2>Welcome to Course Tracker</h2>
        <div>
          {this.props.authStatus ? "Logged in" : "Logged out"}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default compose(
  withTheme,
  withAuth
)(Navbar);
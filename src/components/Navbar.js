import React, { Component } from 'react';
import withTheme from '../hoc/withTheme';

class Navbar extends Component {
  render() {
    const { syntax, ui } = this.props.theme;
    return (
      <nav style={{ background: ui, color: syntax }}>
        <h2>Welcome to Course Tracker</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default withTheme(Navbar);
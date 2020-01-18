import React, { Component } from 'react';
import withTheme from '../hoc/withTheme';

class BookList extends Component {
  render() {
    const { bg, ui, syntax } = this.props.theme;
    return (
      <div className='course-list' style={{ background: bg, color: syntax }}>
        <ul>
          <li style={{ background: ui }}>React Context and Hooks</li>
          <li style={{ background: ui }}>React Redux</li>
          <li style={{ background: ui }}>Pure React</li>
        </ul>
      </div>
    );
  }
}
 
export default withTheme(BookList);
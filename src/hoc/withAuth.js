import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function withAuth (WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {( authContext ) => {
            const { isAuthenticated, toggleAuth } = authContext;  
            return (
              <WrappedComponent authStatus={isAuthenticated} {...this.props}/>
            )
          }}
        </AuthContext.Consumer>
      )
    }
  }
}

import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function withTheme(WrappedComponent) {
  /**** one way with static context ****/
  /* 
  return class extends Component {
    static contextType = ThemeContext;
    render() {
      const { isLightTheme, light, dark } = this.context;
      const theme = isLightTheme ? light : dark;
      return (
        <WrappedComponent theme={theme} {...this.props}/>
      )
    }
  }
  */
 
  /**** other way with Consumer ****/
  return class extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {( context ) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
              <WrappedComponent theme={theme} {...this.props}/>
            )
          }}
        </ThemeContext.Consumer>
      )
    }
  }
}
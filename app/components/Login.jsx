import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export const Login = React.createClass({
  onLogin() {
    const {dispatch} = this.props;
    dispatch(actions.startLogin());
  },

  render() {
    return (
      <div className="container__footer">
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-10" medium-6 large-5>
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with GitHub account below</p>
              <button className="button" onClick={this.onLogin}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);

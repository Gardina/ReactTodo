import React from 'react';

export const Login = React.createClass({
  render() {
    return (
      <div className="container__footer">
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-10" medium-6 large-5>
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with GitHub account below</p>
              <button className="button">Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;

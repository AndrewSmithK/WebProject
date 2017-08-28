import React, { Component } from 'react';
import Field from '../../components/small/Field';

import './styles.scss';

export default class Signin extends Component {
  render() {
    return (
      <div id="signin-page">
        <div className="container">
          <div className="box-wrap">
            <div className="logo">
              logo
            </div>
            <div className="email-form">
              <div className="title">Forgot your password?</div>
              <form className="form">
                  <Field
                    width="half"
                    hintText="Type your email"
                    floatingLabelText="Email"
                  />

                  <button className="btn btn-block" type="submit">Reset password</button>
                </form>
            </div>
            <div className="ask">
            <button className="btn btn-block" type="submit">Don't have an account? <span>Ask access</span></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

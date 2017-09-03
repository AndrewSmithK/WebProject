import React, { Component } from 'react';
import Field from '../../components/small/Field';

import Checkbox from '../../images/SignIn/icon-checkbox.svg';

export default class SigninForm extends Component {
  render() {
    return (
      <div className="email-form">
      <div className="title">Welcome at Qover</div>
      <form className="form">
          <Field
            width="full"
            hintText="Type your email"
            floatingLabelText="Email"
          />
          <Field
            width="full"
            hintText="********"
            floatingLabelText="Password"
          />

          <div className="clearfix"></div>

          <div className="row">
            <div className="col-sm-6 remember">
              <img src={Checkbox} alt="" /> Remember me
            </div>

            <div className="col-sm-6 text-right">
              Forgot your password?
            </div>
          </div>

          <button className="btn btn-block signin-button" type="submit">Sign in to your account</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Field from '../../components/small/Field';

import './forgot-form.scss';

export default class ForgotForm extends Component {
  render() {
    return (
      <div className="email-form">
      <div className="title-forgot">&#60; Forgot your password?</div>
      <form className="form">
          <Field
            width="full"
            hintText="Type your email"
            floatingLabelText="Email"
          />

          <div className="clearfix"></div>

          <button className="btn btn-block reset-button" type="submit">Reset password</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';

import Form from '../../components/forms';
import SigninForm from '../../components/forms/signin-form';

export default class Forgot extends Component {
  render() {
    return (
      <Form>
        <SigninForm />
      </Form>
    );
  }
}

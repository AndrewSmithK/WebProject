import React, { Component } from 'react';

import Form from '../../components/forms';
import ForgotForm from '../../components/forms/forgot-form';

export default class Forgot extends Component {
  render() {
    return (
      <Form>
        <ForgotForm />
      </Form>
    );
  }
}

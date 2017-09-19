import React, { Component } from 'react';
import FormattedMessage from './phrase'

import Form from '../../components/forms';
import SigninForm from '../../components/forms/signin-form';

export default class Forgot extends Component {
  render() {
    return (
      <Form>
        <SigninForm />
        <FormattedMessage 
          id={`home.advantages.title`}
          defaultMessage={`Be part of the future`}
        />
      </Form>
    );
  }
}

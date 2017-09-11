import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

//eslint-disable-next-line
const emailReqex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Subscribe extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      invalidEmail: false
    };
  }
  handleFormSubmit() {
    let requiredFields = this.checkRequiredFields();
    if (!requiredFields.email) {
      console.log("EMAIL OK")
    }
  }
  checkRequiredFields() {
    let requiredFields = {
      email: true,
      password: true
    }
    if (this.state.email && !this.state.invalidEmail) {
      requiredFields.email = false;
    } else {
      this.setState({ requireEmail: true })
    }
    return requiredFields;
  }
  handleEmailChange(e) {
    const email = e.target.value.trim();
    if (email && emailReqex.test(email)) {
      this.setState({ invalidEmail: false })
    }
    this.setState({ email: email, requireEmail: false })
  }
  validateEmail() {
    if (this.state.email && emailReqex.test(this.state.email)) {
      this.setState({ invalidEmail: false })
    } else {
      this.setState({ invalidEmail: this.state.email ? true : false })
    }
  }
  render() {
    return <section className="section bg-light-grey" id="subscribe">
      <div className="text-center">
        <h4 className="title text-grey">
          <FormattedMessage
            id={`subscribe.title`}
            defaultMessage={`Keep up with the latest features`}
          />
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleFormSubmit}>
            <input type="email" placeholder="please@qover.me" 
              onBlur={() => this.validateEmail()}
              onChange={(e) => this.handleEmailChange(e)}
              error={this.state.invalidEmail} required />
            <button type="submit" className="btn bg-turquoise text-white">
              <FormattedMessage
                id={`subscribe.btnSubscribe`}
                defaultMessage={`Subscribe`}
              />
            </button>
          </form>
        </div>
      </div>
    </section>;
  }
}

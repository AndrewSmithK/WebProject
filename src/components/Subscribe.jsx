import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

//eslint-disable-next-line
const emailReqex = /^(?=[^@]{4,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/;

export default class Subscribe extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      invalidEmail: false,
      error: false
    };
  }
  handleFormSubmit(e) {
    let requiredFields = this.checkRequiredFields();
    if (!this.state.invalidEmail) {
      console.log("EMAIL OK")
      this.setState({error: false});
    }
    else {
      this.setState({error: true});
      e.preventDefault();
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
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
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
        {this.state.error ? <div style={{textAlign: 'center', color: 'red', width:'75%'}}><span>Input correct email</span></div> : null}
      </div>
    </section>;
  }
}

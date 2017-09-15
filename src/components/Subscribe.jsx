import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

//eslint-disable-next-line
const emailReqex = /^(?=[^@]{4,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/;

export default class Subscribe extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      invalidEmail: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    if (this.state.invalidEmail) {
      alert('hello')
    }
  }

  handleEmailChange(e) {
    let email = e.target.value.trim()
    this.setState({
      invalidEmail: emailReqex.test(email) ? true : false
    })
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
            <input
              type="email"
              required
              placeholder="please@qover.me"
              onChange={this.handleEmailChange}
            />
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

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
<<<<<<< HEAD
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="email"
              required
              placeholder="please@qover.me"
              onChange={this.handleEmailChange}
            />
=======
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
            <input type="email" placeholder="please@qover.me"
              style={this.state.invalidEmail ? {boxShadow:'inset 0 0 2px #e74c3c'} : null}
              onBlur={() => this.validateEmail()}
              onChange={(e) => this.handleEmailChange(e)}
              error={this.state.invalidEmail} required />
>>>>>>> 4c87d34071e4893fe0bc018ce41c04a5152e8c7e
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

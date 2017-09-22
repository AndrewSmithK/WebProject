import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import Dialog from 'material-ui/Dialog';

import './Subscribe.scss'

//eslint-disable-next-line
const emailReqex = /^(?=[^@]{4,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/;

export default class Subscribe extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      invalidEmail: false,
      open: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen = () => {
    this.setState({ open: true });
    setTimeout(() => {
      this.handleClose()
    }, 4000)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFormSubmit(e) {
    e.preventDefault()
    if (this.state.invalidEmail) {
      this.handleOpen()
    } else if (this.state.email === '') {
      this.showMessage('Email address field is empty')
    } else {
      this.showMessage('Email address is filled in incorrectly')
    }
  }

  handleEmailChange(e) {
    let email = e.target.value.trim()
    this.setState({
      email,
      invalidEmail: emailReqex.test(email) ? true : false
    })
  }

  showMessage(message) {
    let item = document.getElementsByClassName('subscribe-form-message')[0]
    item.innerHTML = message
    item.classList.add('subscribe-form-message--show')
    setTimeout(() => {
      item.classList.remove('subscribe-form-message--show')
    }, 1500)
  }

  render() {
    return (
      <section className="section bg-light-grey" id="subscribe">

        <Dialog
          className="dialog-window"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
          <button className="close-button" onClick={this.handleClose}><i className="fa fa-times" aria-hidden="true"></i></button>
          Thank you for your subscription! You will receive soon some news about our latest features.
        </Dialog>

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
                placeholder="please@qover.me"
                onChange={this.handleEmailChange}
              />
              <div className="subscribe-form-message">test</div>
              <button type="submit" className="btn bg-turquoise text-white">
                <FormattedMessage
                  id={`subscribe.btnSubscribe`}
                  defaultMessage={`Subscribe`}
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

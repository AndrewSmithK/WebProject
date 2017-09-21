import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import poneIcon from '../../images/contact-us/icon-phone.svg';
import mailIcon from '../../images/contact-us/icon-mail.svg';
import pinIcon from '../../images/contact-us/icon-pin.svg';

import './Field.scss'

const settings = {
  inputStyle: {
    paddingBottom: '18px',
    fontSize: '18px',
    color: '#317bda'
  },
  textareaStyle: {
    paddingBottom: '7px',
    fontSize: '18px',
    color: '#317bda'
  },
  floatingLabelStyle: {
    top: '30px',
    fontSize: '14.667px',
    color: '#5b7289',
    fontFamily: 'Roboto'
  },
  hintStyle: {
    fontSize: '18px',
    color: '#86ade6',
    bottom: '18px'
  },
  underlineStyle: {
    borderBottomWidth: '2px',
    borderBottomColor: '#317bda'
  },
  errorStyle: {
    backgroundColor: '#f4566a',
    color: '#f4566a',
    padding: '10px',
    fontSize: '12px',
    fontWeight: '500'
  }
}

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        company: '',
        email: '',
        object: '',
        phone: '',
        message: ''
      }
    }
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  formSubmit() {
    alert('Success. In the near future you will receive an answer.')
    this.setState({
      formData: {
        company: '',
        email: '',
        object: '',
        phone: '',
        message: ''
      }
    })
  }

  handleChange(event) {
    const { formData } = this.state
    formData[event.target.name] = event.target.value
    this.setState({ formData })
  }

  handleBlur(event) {
    this.refs[event.target.name].validate(event.target.value);
}

  render() {
    const { formData } = this.state

    return (
      <div id="contactUs">
        <div className="container">
          <div className="row wraper">
            <div className="form-col">
              <div className="form-wrap">
                <h3 className="title">
                  <FormattedMessage
                    id={`contactUs.title`}
                    defaultMessage={`Send us a message`}
                  />
                </h3>
                <ValidatorForm className="row form" instantValidate={false} onSubmit={this.formSubmit.bind(this)}>
                  <div className='field half'><TextValidator
                    {...settings}
                    fullWidth
                    floatingLabelFixed
                    className="text-field--fixed"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    onChange={this.handleChange}
                    value={formData.company}
                    name="company"
                    hintText="Company"
                    floatingLabelText="Name/Company"
                    onBlur={this.handleBlur}
                    ref="company"
                  /></div>
                  <div className='field half'><TextValidator
                    {...settings}
                    fullWidth
                    floatingLabelFixed
                    className="text-field--fixed"
                    onChange={this.handleChange}
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    name="email"
                    type="email"
                    hintText="nathalie@qover.me"
                    floatingLabelText="Email"
                    onBlur={this.handleBlur}
                    ref="email"
                  /></div>
                  <div className='field half'><TextValidator
                    {...settings}
                    fullWidth
                    floatingLabelFixed
                    className="text-field--fixed"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    onChange={this.handleChange}
                    value={formData.object}
                    name="object"
                    hintText="i ♥ Qover"
                    floatingLabelText="Object"
                    onBlur={this.handleBlur}
                    ref="object"
                  /></div>
                  <div className='field half'><TextValidator
                    {...settings}
                    fullWidth
                    floatingLabelFixed
                    className="text-field--fixed"
                    validators={['required', 'matchRegexp:^[\\+]?\\d{3,100}$']}
                    errorMessages={['this field is required', 'The format of the phone number is not correct.']}
                    onChange={this.handleChange}
                    value={formData.phone}
                    name="phone"
                    hintText="+32478982241"
                    type="tel"
                    floatingLabelText="Phone Number"
                    onBlur={this.handleBlur}
                    ref="phone"
                  /></div>
                  <div className='field full'><TextValidator
                    {...settings}
                    fullWidth
                    floatingLabelFixed
                    className="text-field"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    onChange={this.handleChange}
                    value={formData.message}
                    name="message"
                    multiLine
                    rows={1}
                    rowsMax={5}
                    floatingLabelText="Type your message here"
                    onBlur={this.handleBlur}
                    ref="message"
                  /></div>

                  <button className="btn" type="submit">Submit</button>
                </ValidatorForm>
              </div>
            </div>
            <div className="contact-info-col">
              <h3 className="title">Contact information</h3>
              <h4 className="subtitle">We don’t bite - Let’s talk !</h4>
              <ul className="contact-list">
                <li>
                  <span>(+32) 2 588 25 50</span>
                  <div className="icon">
                    <img src={poneIcon} alt="" />
                  </div>
                </li>
                <li>
                  <span><i>contact@qover.com</i></span>
                  <div className="icon">
                    <img src={mailIcon} alt="" />
                  </div>
                </li>
                <li>
                  <address>
                    <span>Qover SA/NV</span>

                    <p>Rue des Palais, 44<br />
                      1030 Brussels<br />
                      Belgium</p>

                    <p>Great Marlborough St, 44<br />
                      Carnaby, London W1F 7JL<br />
                      UK</p>
                  </address>
                  <div className="icon">
                    <img src={pinIcon} alt="" />
                  </div>
                </li>
                <li>
                  <p className="rpm">RPM: BE0650.939.878<br />
                    FSMA: 115284A</p></li>
                <li>
                  <div className="sn">
                    <Link to="/"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                    <Link to="/"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

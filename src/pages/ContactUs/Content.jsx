import React from 'react';
import Field from '../../components/small/Field';

import poneIcon from '../../images/icon-phone.svg';
import mailIcon from '../../images/icon-mail.svg';
import pinIcon from '../../images/icon-pin.svg';

export default class Content extends React.Component {
  render() {
    return (
      <div id="contactUs">
        <div className="container">
          <div className="row wraper">
            <div className="form-col">
              <div className="form-wrap">
                <h3 className="title">Send us a message</h3>
                <form className="row form">
                  <Field
                    width="half"
                    hintText="Company"
                    floatingLabelText="Name/Company"
                  />
                  <Field
                    width="half"
                    hintText="nathalie@qover.me"
                    floatingLabelText="Email"
                  />
                  <Field
                    width="half"
                    hintText="i ♥ Qover"
                    floatingLabelText="Object"
                  />
                  <Field
                    width="half"
                    hintText="+32478982241"
                    floatingLabelText="Phone Number"
                  />
                  <Field
                    width="full"
                    multiLine
                    rows={1}
                    rowsMax={5}
                    floatingLabelText="Type your message here"
                  />

                  <button className="btn" type="submit">Submit</button>
                </form>
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
                  <span><i>contact@qover.be</i></span>
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
                    <div style={{ background: '#f00', width: `${20}px`, height: `${20}px`, marginRight: `${20}px`, display: 'inline-block' }} />
                    <div style={{ background: '#f00', width: `${20}px`, height: `${20}px`, marginRight: `${20}px`, display: 'inline-block' }} />
                    <div style={{ background: '#f00', width: `${20}px`, height: `${20}px`, marginRight: `${20}px`, display: 'inline-block' }} />
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

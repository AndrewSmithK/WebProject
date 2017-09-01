
import React from 'react';
import IconMail from '../../images/OurProducts/GapInsurance/icon-mail.svg';
import IconDesk from '../../images/OurProducts/GapInsurance/icon-desktop.svg';
import IconPhone from '../../images/OurProducts/GapInsurance/icon-phone.svg';

export default class GapCase extends React.Component {
  render() {
    return <section className="section" id="gap-case">
      <h3 className="title text-blue text-center">
        What to do in case of a claim ?
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="contacts">
              <h4 className="title">
                If there is an event that could result in a total loss claim, your customer must contact us as soon as possible.
              </h4>
              <h4 className="title">
                <b>
                  Qover mainly uses digital medium of communication.
                </b>
              </h4>
              <h5 className="subtitle text-turquoise">
                Your customer can reach us by:
              </h5>
              <div className="row">
                <div className="col-md-10">
                  <div className="icon">
                    <img src={IconMail}/>
                  </div>
                  <p className="text">
                    Sending an email to claims@qover.me  with all relevant and required documents  in the attachment
                  </p>
                </div>
                <div className="col-md-10">
                  <div className="icon">
                    <img src={IconDesk}/>
                  </div>
                  <p className="text">
                    Going on our website www.qover.me  and use the claim form
                  </p>
                </div>
                <div className="col-md-10">
                  <div className="icon">
                    <img src={IconPhone}/>
                  </div>
                  <p className="text">
                    &nbsp;&nbsp;Calling us at (+32) 588 25 50
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="text-container">
              <p className="text text-grey">
                All claims must be notified as soon as reasonably possible, and in any event within 30 days of a total loss.
              </p>
              <p className="text text-grey">
                Your customer must comply with the claim procedure as
                explained in the General Policy Conditions, the Policy Schedule and by us.
              </p>
              <p className="text text-grey">
                Important: your customer should not accept any settlement offer
                from his motor insurer without first contacting the administrator or the claim adjuster.
              </p>
              <p className="text text-grey">
                To authorise a claim, your customer should provide us with: <br/>
                 •&nbsp;His personal and vehicle details (name, surname, vehicle type, plate, etc.) <br/>
                •&nbsp;The Claim notification statement  <br/>
                •&nbsp;A copy of his full or light casco Policy Schedule  <br/>
                •&nbsp;In the case of theft, he must report the incident to the police and provide us with the crime reference number of the file
              </p>
              <p className="text text-grey">
                Please note that your customer also need to provide the following pieces at a later stage of the process:  <br/>
                •&nbsp;The settlement Proposal Letter of his Casco Insurer <br/>
                 •&nbsp;The expertise report (if applicable)  <br/>
                •&nbsp;The invoice or equivalent proof of purchase for his vehicle <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

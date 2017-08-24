import React from 'react';
import IconReferral from '../../images/icon-referral.png';
import IconLead from '../../images/icon-lead.png';
import IconVertical from '../../images/icon-vertical.png';
import IconLaunch from '../../images/icon-launch.png';

export default class Explanation extends React.Component {
  render() {
    return <section className="section bg-pale-grey-two" id="explanation">
      <h1 className="title text-blue">
        How does it work?
      </h1>
      <h3 className="subtitle text-blue">
        Choose one of the three options!
      </h3>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <div className="item bg-white">
              <div className="icon">
                <img src={IconReferral} alt="icon-referral"/>
              </div>
              <h5 className="title text-blue">Referral</h5>
              <p className="text text-grey">
                <b>You want to keep it simple ?</b>
                <br/><br/>
                No worries! Make the purchase yourself and
                print the contract. An easy way to offer our
                products to your customers.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="item bg-white">
              <div className="icon">
                <img src={IconLead} alt="icon-lead"/>
              </div>
              <h5 className="title text-blue">Digital Lead</h5>
              <p className="text text-grey">
                <b>Send a link to your customer via email, with
                your own branding or Qover's (your choice).</b>
                <br/><br/>
                You can preselect your customer options
                and he can purchase the coverage he wants
                in real time.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="item bg-white">
              <div className="icon">
                <img src={IconVertical} alt="icon-vertical"/>
              </div>
              <h5 className="title text-blue">Vertical Integration</h5>
              <p className="text text-grey">
                <b>It only takes few lines of code to add our
                digital module within your website or App.</b>
                <br/><br/>
                No IT resources in-house? Our developers
                can make the integration for you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="label bg-turquoise">
        <div className="icon">
          <img src={IconLaunch} alt="qover - launch"/>
        </div>
        <div className="text">
          <h5 className="title">Even more if you are an intermediary</h5>
          <p>
            An Amendment or a cancellation ? <br/> 
            It is digital, plug & play and real-time for you and for your customer
          </p>
        </div>
      </div>
    </section>;
  }
}

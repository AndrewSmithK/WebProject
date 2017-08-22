
import React from 'react';
import IconCancel from '../../images/gap-insurance/icon-cancel.png';


export default class gapVideo extends React.Component {
  render() {
    return <section className="section" id="gap-careAbout">
      <h2 className="title">
        We care about your customer
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-2">
                <div className="icon">
                  <img src={IconCancel} alt="icon-cancel"/>
                </div>
                <div className="col-md-4">
                  <h4>
                    Cancel anytime
                  </h4>
                  <p>
                    Your customer can cancel his contract at anytime.
                    We will automatically make a pro-rata refund.
                    There is no cancellation fee. Full transparency, no hidden fees!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

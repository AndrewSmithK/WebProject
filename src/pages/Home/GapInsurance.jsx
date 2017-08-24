import React from 'react';
import { Link } from 'react-router';
import IconCancel from '../../images/icon-cancel-small.png';
import IconCoverage from '../../images/icon-coverage.png';
import IconReferralSmall from '../../images/icon-referral_small.png';
import Mockup from '../../images/mockup.png';

export default class GapInsurance extends React.Component {
  render() {
    return (<section className="section bg-dark-blue" id="gap-insurance">
      <div className="container text-white">
        <div className="row">
          <div className="col-6">
            <h3 className="subtitle">
              <small className="text-turquoise">Discover our first product:</small><br />
              Be one of the first to introduce the <br />
              Motor GAP Insurance in Belgium.
            </h3>
            <div className="text-block">
              <h4 className="title">
                What is GAP Insurance?
              </h4>
              <p className="text">
                Get back 100% back of the purchase price of a car up to 5-years.
                <br /><br />
                The GAP insurance covers the potential financial shotfall between the <br />
                purchase price of the car and the indemnity paid by the casco insurer <br />
                in case the vehicle is written off.
              </p>
            </div>
            <div className="text-block">
              <h4 className="title">
                Target customer:
              </h4>
              <p className="text">
                •&nbsp;&nbsp;&nbsp;&nbsp;For new and used cars bought in the last 6 months <br />
                •&nbsp;&nbsp;&nbsp;&nbsp;Must have a casco insurance
              </p>
            </div>

            <h4 className="title" style={{ marginBottom: '20px' }}>
              We sublime the customer experience
            </h4>

            <div className="icon-label-list">
              <div className="icon-label">
                <img src={IconCoverage} alt="icon-coverage" />
                <span>Up to 60 months</span>
              </div>
              <div className="icon-label" style={{ float: 'right' }}>
                <img src={IconCancel} alt="icon-cancel" />
                <span>Cancel anytime</span>
              </div>
              <div className="icon-label">
                <img src={IconReferralSmall} alt="icon-referral_small" />
                <span>Digital, efficient and much (much) cheaper</span>
              </div>
            </div>

            <div>
              <Link className="btn button btn-turquoise" to="#">More info about the GAP</Link>
              <Link className="link text-white" to="#">
                Become a partner<i className="fa fa-angle-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="big-image">
              <img src={Mockup} alt="mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

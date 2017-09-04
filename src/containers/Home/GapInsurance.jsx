import React from 'react';
import { Link } from 'react-router-dom';
import IconCancel from '../../images/HomePage/GapInsurance/icon-cancel-small.svg';
import IconCoverage from '../../images/HomePage/GapInsurance/icon-coverage.svg';
import IconReferralSmall from '../../images/HomePage/GapInsurance/icon-referral-small.svg';
import Mockup from '../../images/HomePage/GapInsurance/mockup.png';

export default class GapInsurance extends React.Component {
  render() {
    return (<section className="section bg-dark-blue" id="gap-insurance">
      <div className="gap-tabs">
        <div className="container">
          <ul className="nav nav-pills" role="tablist">
            <li className="nav-item">
              <p>the qover products</p>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#insurance" role="tab" data-toggle="tab">Gap Insurance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#light-casco" role="tab" data-toggle="tab">Light Casco</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#full-casco" role="tab" data-toggle="tab">Full Casco</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#driver-accident" role="tab" data-toggle="tab">Driver Accident</a>
            </li>
          </ul>
        </div>
      </div>

      

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="insurance">

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
              <Link className="btn button btn-turquoise" to="/">More info about the GAP</Link>
              <Link className="link text-white" to="/">
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

        </div>
        <div role="tabpanel" className="tab-pane" id="light-casco">2</div>
        <div role="tabpanel" className="tab-pane" id="full-casco">3</div>
        <div role="tabpanel" className="tab-pane" id="driver-accident">4</div>
      </div>



    </section>);
  }
}

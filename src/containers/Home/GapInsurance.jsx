import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

import DropdownItem from './dropdownItem';

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
              <div className="left-block col-12 col-md-6">
                <h3 className="subtitle">
                  <small className="text-turquoise">
                    <FormattedMessage
                      id={`home.gap.subtitle`}
                      defaultMessage={`Discover our first product:`}
                    />
                  </small><br />
                  <FormattedMessage
                    id={`home.gap.title`}
                    defaultMessage={`Be one of the first to introduce the
                Motor GAP Insurance in Belgium.`}
                  />
                </h3>
                <DropdownItem title={{
                  id: "home.gap.part1.title",
                  text: "What is GAP Insurance?"
                }}>
                  <p className="text">
                    <FormattedMessage
                      id={`home.gap.part1.p1`}
                      defaultMessage={`Get back 100% of the purchase price of a car up to 5-years.`}
                    />
                    <br /><br />
                    <FormattedMessage
                      id={`home.gap.part1.p2`}
                      defaultMessage={`The GAP insurance covers the potential financial shotfall between the
                  purchase price of the car and the indemnity paid by the casco insurer
                  in case the vehicle is written off.`}
                    />
                  </p>
                </DropdownItem>
                <DropdownItem title={{
                  id: "home.gap.part2.title",
                  text: "Target customer:"
                }}>
                  <p className="text what-desc">
                    <FormattedMessage
                      id={`home.gap.part2.listitem1`}
                      defaultMessage={`For new and used cars bought in the last 6 months`}
                    /><br />
                    <FormattedMessage
                      id={`home.gap.part2.listitem2`}
                      defaultMessage={`Must have a casco insurance`}
                    />
                  </p>
                </DropdownItem>
                <DropdownItem  style={{ marginBottom: '20px' }} title={{
                  id: "home.gap.part3.title",
                  text: "We sublime the customer experience"
                }}>
                  <div className="icon-label-list">
                    <div className="icon-label">
                      <img src={IconCoverage} alt="icon-coverage" />
                      <span>
                        <FormattedMessage
                          id={`home.gap.part3.listitem1`}
                          defaultMessage={`Up to 60 months`}
                        />
                      </span>
                    </div>
                    <div className="icon-label" style={{ float: 'right' }}>
                      <img src={IconCancel} alt="icon-cancel" />
                      <span>
                        <FormattedMessage
                          id={`home.gap.part3.listitem2`}
                          defaultMessage={`Cancel anytime`}
                        />
                      </span>
                    </div>
                    <div className="icon-label">
                      <img src={IconReferralSmall} alt="icon-referral_small" />
                      <span>
                        <FormattedMessage
                          id={`home.gap.part3.listitem3`}
                          defaultMessage={`Digital, efficient and much (much) cheaper`}
                        />
                      </span>
                    </div>
                  </div>
                </DropdownItem>
                <div>
                  <Link className="btn button btn-turquoise" to="/our-products/gap-insurance">
                    <FormattedMessage
                      id={`home.gap.btnMore`}
                      defaultMessage={`More info about the GAP`}
                    />
                  </Link>
                  <Link className="link text-white" to="/registration">
                <FormattedMessage
                  id={`home.gap.link`}
                  defaultMessage={`Become a partner`}
                />
                <i className="fa fa-angle-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
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

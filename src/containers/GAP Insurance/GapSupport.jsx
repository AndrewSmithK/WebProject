import React from 'react';
import IconPhonelink from '../../images/OurProducts/GapInsurance/phonelink-material.svg';
import Pdf from '../../images/OurProducts/GapInsurance/icon-pdf.svg';
import { Link } from 'react-router-dom';

export default class GapSupport extends React.Component {
  render() {
    return <section className="section" id="gap-support">
      <h2 className="title text-blue">
        Support Center
      </h2>
      <h4 className="subtitle text-grey">
        Available in Belgium
      </h4>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="content">
              <h5 className="title text-grey">
                Important information
              </h5>
              <div className="row">
                <div className="col-md-1 col-1">
                  <div className="icon-phonelink" style={{width: 15 + 'px', height: 15 + 'px', background: '#f00'}}/>
                  {/*<div className="icon">*/}
                    {/*<img src={IconCheck} alt="icon-check"/>*/}
                  {/*</div>*/}
                </div>
                <div className="col-md-11 col-10">
                  <p className="text text-grey">
                    The GAP insurance is only valid if the insured vehicle is covered by a full or light casco
                    insurance for the entire contract duration.
                  </p>
                </div>
                <div className="col-md-1 col-1">
                  <div className="icon-phonelink" style={{width: 15 + 'px', height: 15 + 'px', background: '#f00'}}/>
                  {/*<div className="icon">*/}
                    {/*<img src={IconCheck} alt="icon-check"/>*/}
                  {/*</div>*/}
                </div>
                <div className="col-md-11 col-10">
                  <p className="text text-grey">
                    Overinsurance should be avoided. Consider deferring the GAP insurance start date if your
                    customer already has a 100% protection for a specific period of time.
                  </p>
                </div>
                <div className="col-md-1 col-1">
                  <div className="icon-phonelink" style={{width: 15 + 'px', height: 15 + 'px', background: '#f00'}}/>
                  {/*<div className="icon">*/}
                    {/*<img src={IconCheck} alt="icon-check"/>*/}
                  {/*</div>*/}
                </div>
                <div className="col-md-11 col-10">
                  <p className="text text-grey">
                    The settlement received from the GAP insurance is based on the invoice value of the car.
                    Be aware that: Discounts your customer may have received at the purchase of the car
                    might not be available in the future.
                  </p>
                </div>
                <div className="col-md-1 col-1">
                  <div className="icon-phonelink" style={{width: 15 + 'px', height: 15 + 'px', background: '#f00'}}/>
                  {/*<div className="icon">*/}
                    {/*<img src={IconCheck} alt="icon-check"/>*/}
                  {/*</div>*/}
                </div>
                <div className="col-md-11 col-10">
                  <p className="text text-grey">
                    When your customer's car reaches 5 years, a registered letter will be sent to him to advise
                    him the contract will end on the day of his car's 5th anniversary.
                  </p>
                </div>
                <div className="col-md-1 col-1">
                  <div className="icon-phonelink" style={{width: 15 + 'px', height: 15 + 'px', background: '#f00'}}/>
                  {/*<div className="icon">*/}
                    {/*<img src={IconCheck} alt="icon-check"/>*/}
                  {/*</div>*/}
                </div>
                <div className="col-md-11 col-10">
                  <p className="text text-grey">
                    In case of total loss or theft of the vehicle, your customer must require our consent before
                    accepting any settlement from his casco insurer.
                  </p>
                </div>
              </div>
              <div className="row">
                <p className="read-carefully text-grey">
                  Please read carefully all Terms & Conditions - The GAP insurance is underwritten by Lloyd’s Syndicate 5820, AmTrust
                  Syndicates Limited which is registered in England and Wales under company registration number 04434499 - The
                  GAP insurance is a non-life insurance product (branch 16).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="items">
              <div className="item-paper">
                <h6 className="subtitle text-grey">
                  Document repository
                </h6>
                <div className="row">

                  <div className="item-link">
                    <div className="icon-pdf">
                      <img src={Pdf} alt="icon-pdf" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        General Policy Conditions
                      </Link>
                    </div>
                  </div>

                  <div className="item-link">
                    <div className="icon-pdf">
                      <img src={Pdf} alt="icon-pdf" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        Key Facts
                      </Link>
                    </div>
                  </div>

                  <div className="item-link">
                    <div className="icon-pdf">
                      <img src={Pdf} alt="icon-pdf" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        Read our Brochure
                      </Link>
                    </div>
                  </div>

                  <div className="item-link">
                    <div className="icon-phonelink">
                      <img src={IconPhonelink} alt="icon-phoneLink" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        Discover our FAQ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

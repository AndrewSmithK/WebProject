
import React from 'react';
import IconCancel from '../../images/gap-insurance/icon-cancel.svg';
import IconCalendar from '../../images/gap-insurance/icon-calendar.svg';
import IconCoverage from '../../images/gap-insurance/icon-coverage.svg';
import IconNewCar from '../../images/gap-insurance/icon-new-car.svg';

export default class GapCareAbout extends React.Component {
  render() {
    return <section className="section" id="gap-careAbout">
      <h2 className="title text-grey">
        We care about your customer
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="item">
              <div className="row">
                <div className="col-md-2">
                  <div className="icon">
                    <img src={IconCancel} alt="icon-cancel" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="text">
                    <h4 className="text-grey">
                      Cancel anytime
                    </h4>
                    <p className="text-grey">
                      Your customer can cancel his contract at anytime.
                      We will automatically make a pro-rata refund.
                      There is no cancellation fee. Full transparency, no hidden fees!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item">
              <div className="row">
                <div className="col-md-2">
                  <div className="icon">
                    <img src={IconCalendar} alt="icon-ca=lendar" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="text">
                    <h4 className="text-grey">
                      Extend prevailing 100% coverage
                    </h4>
                    <p className="text-grey">
                      Sometimes Full Casco insurers guarantee 100% of a vehicle value
                      for a certain period.Your customer can then defer his contract for
                      up to 3 years when this 100% ends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item">
              <div className="row">
                <div className="col-md-2">
                  <div className="icon">
                    <img src={IconCoverage} alt="icon-coverage" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="text">
                    <h4 className="text-grey">
                      Coverage up to 5 years
                    </h4>
                    <p className="text-grey">
                      Your customer can protect 100% of the purchase price of his car for
                      up to 5 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item">
              <div className="row">
                <div className="col-md-2">
                  <div className="icon">
                    <img src={IconNewCar} alt="icon-new-car" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="text">
                    <h4 className="text-grey">
                      New & recent used cars
                    </h4>
                    <p className="text-grey">
                      Available for new and used cars, which are maximum 3 years old,
                      have covered less than 100,000 km at the start date and have been
                      bought in the last 6 months.
                    </p>
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

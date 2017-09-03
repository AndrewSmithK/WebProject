import React from 'react';
import IconRevenue from '../../images/HomePage/Advantages/icon-revenue.svg';
import IconOnDemand from '../../images/HomePage/Advantages/icon-on-demand.svg';
import IconDev from '../../images/HomePage/Advantages/icon-dev.svg';

export default class Advantages extends React.Component {
  render() {
    return (<section className="section" id="advantages">
      <h2 className="title text-blue">
        Be part of the future
      </h2>
      <h3 className="subtitle text-grey">
        100% Digital - Sublime Customer Experience
      </h3>
      <div className="container">
        <div className="row">
          <div className="item-box">
            <div className="item col-md-4 col-sm-12">
              <div className="item-icon">
                <img src={IconRevenue} alt="icon-revenue" />
              </div>
              <h4 className="title text-blue">
                Reach new source <br />
                of revenues
              </h4>
              <p className="text text-grey">
                Gain additional revenues by adding our insurance
                products to broaden your offering.
              </p>
            </div>
            <div className="item col-md-4 col-sm-12">
              <div className="item-icon">
                <img src={IconOnDemand} alt="icon-on-demand" />
              </div>
              <h4 className="title text-blue">
                Your branding, <br />
                our innovative products
              </h4>
              <p className="text text-grey">
                It takes only 5 minutes to adjust our solution to your branding.
                We offer much more: innovative products, on-demand features,
                cancellation at any time...
                That&apos;s our DNA!
              </p>
            </div>
            <div className="item col-md-4 col-sm-12">
              <div className="item-icon">
                <img src={IconDev} alt="icon-dev" />
              </div>
              <h4 className="title text-blue">
                Referral, digital lead <br />
                or Full Integration
              </h4>
              <p className="text text-grey">
                Our fully automated & online solution can be integrated within your IT
                in a few minutes. Your customer gets a price in real time and can purchase
                an insurance contract which is digitally and instantly issued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

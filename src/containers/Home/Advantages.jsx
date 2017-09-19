import React from 'react';
import FormattedMessage from '../../components/phrase';

import IconRevenue from '../../images/HomePage/Advantages/icon-revenue.svg';
import IconOnDemand from '../../images/HomePage/Advantages/icon-on-demand.svg';
import IconDev from '../../images/HomePage/Advantages/icon-dev.svg';

export default class Advantages extends React.Component {
  render() {
    return (<section className="section" id="advantages">
      <h2 className="title text-blue">
        <FormattedMessage 
          id={`home.advantages.title`}
          defaultMessage={`Be part of the future`}
        />
      </h2>
      <h3 className="subtitle text-grey">
        <FormattedMessage 
          id={`home.advantages.subtitle`}
          defaultMessage={`100% Digital - Sublime Customer Experience`}
        />
      </h3>
      <div className="container">
        <div className="row">
          <div className="item-box">
            <div className="item col-md-4 col-sm-12">
              <div className="item-icon">
                <img src={IconRevenue} alt="icon-revenue" />
              </div>
              <h4 className="title text-blue">
                <FormattedMessage
                  id={`home.advantages.item1.title`}
                  defaultMessage={`Reach new source of revenues`}
                />
              </h4>
              <p className="text text-grey">
                <FormattedMessage
                  id={`home.advantages.item1.text`}
                  defaultMessage={`Gain additional revenues by adding our insurance
                  products to broaden your offering.`}
                />
              </p>
            </div>
            <div className="item col-md-4 col-sm-12">
              <div className="item-icon">
                <img src={IconOnDemand} alt="icon-on-demand" />
              </div>
              <h4 className="title text-blue">
                <FormattedMessage
                  id={`home.advantages.item2.title`}
                  defaultMessage={`Your branding, our innovative products`}
                />
              </h4>
              <p className="text text-grey">
                <FormattedMessage
                  id={`home.advantages.item1.text`}
                  defaultMessage={`It takes only 5 minutes to adjust our solution to your branding.
                  We offer much more: innovative products, on-demand features,
                  cancellation at any time...
                  That's our DNA!`}
                />
              </p>
            </div>
            <div className="item col-md-4 col-sm-12">
              <div className="item-icon">
                <img src={IconDev} alt="icon-dev" />
              </div>
              <h4 className="title text-blue">
                <FormattedMessage
                  id={`home.advantages.item2.title`}
                  defaultMessage={`Referral, digital lead
                  or Full Integration`}
                />
              </h4>
              <p className="text text-grey">
                <FormattedMessage
                  id={`home.advantages.item2.title`}
                  defaultMessage={`Our fully automated & online solution can be integrated within your IT
                  in a few minutes. Your customer gets a price in real time and can purchase
                  an insurance contract which is digitally and instantly issued.`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

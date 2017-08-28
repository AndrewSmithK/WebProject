import React from 'react';
import IconSettings from '../../images/About/WhyQover/icon-settings.svg';
import IconEnergy from '../../images/About/WhyQover/icon-energy.svg';
import IconDevAbout from '../../images/About/WhyQover/icon-dev-about.svg';
import lloyds from '../../images/About/WhyQover/logo-lloyds.svg';
import qover from '../../images/About/WhyQover/q-qover.svg';

export default class WhyQover extends React.Component {
  render() {
    return <section className="section" id="why-qover">
      <h1 className="title text-turquoise">
        Why Qover?
      </h1>
      <div className="container">
        <div className="row">
          <div className="item col-md-4 col-sm-12">
            <div className="icon">
              <img src={IconSettings} alt="icon-settings"/>
            </div>
            <h4 className="title text-blue">
              <b>
                We build the product <br/>
                & the pricing ourselves
              </b>
            </h4>
            <p className="text text-grey">The only viable way to truly innovate in Insurance is to behave as an Insurer from a product development & pricing perspective.</p>
            <p className="text text-grey">This is what we do at Qover! We don't sell "on the shelf" products from an Insurer but we internally build our own products and make the pricing.</p>
            <p className="text text-grey">So at Qover, you will find unique innovative products with a pricing sophistication that goes beyond what traditional insurers do.</p>
            <p className="text text-grey">With Qover, you can differentiate yourself from the market with a much more competitive price for your customers.</p>
          </div>
          <div className="item col-md-4 col-sm-12">
            <div className="item-icon">
              <img src={IconEnergy} alt="icon-energy"/>
            </div>
            <h4 className="title text-blue">
              <b>
                We are strong : <br/>
                The Lloyd’s is behind us
              </b>
            </h4>
            <div className="logo">
              <img src={lloyds} alt="lloyds" />
            </div>
            <p className="text text-grey">Lloyd’s is the world’s specialist insurance and reinsurance market, bringing together an outstanding concentration of underwriting expertise and talent. It is often the first to insure emerging, unusual and complex risks.</p>
            <p className="text text-grey">Around 80 syndicates are underwriting insurance at Lloyd’s, covering all classes of business. Together they interact with thousands of brokers daily to create insurance solutions for businesses in over 200 countries and territories around the world. Lloyd’s insures the majority of FTSE 100 and Dow Jones industrial average companies.</p>
            <p className="text text-grey">Lloyd’s enjoys strong financial security supported by excellent ratings. Visit www.lloyds.com for more information.</p>
          </div>
          <div className="item col-md-4 col-sm-12">
            <div className="item-icon">
              <img src={IconDevAbout} alt="icon-dev-about"/>
            </div>
            <h4 className="title text-blue">
              <b>We are the only fully digital player</b>
            </h4>
            <p className="text text-grey">Digital does not only mean "on the internet". At Qover it means rethinking the front and back-office of an insurer optimizing processes by using technology.</p>
            <p className="text text-grey">The result allows us to make instant decision, offer personalised products at the lowest rate.</p>
            <p className="text text-grey">Check it out by yourself: no upfront fees, no hidden charges. By filling few basic details, your customer gets a personalised quote and buy the contract in real time. No more paper!</p>
            <p className="text text-grey">We have entirely digitalised the user experience. We created the smartest system around where you can access your own dashboard, manage your porfolio & follow your statistics.</p>
          </div>
        </div>
      </div>
      <div className="container" id="insertion">
        <div className="insertion row">
          <div className="item col-md-10">
            <div className="qover-logo">
              <img src={qover} alt="qover" />
            </div>
            <div>
              <b>With our business model, you keep the same level of commission</b>
              (more if you wish to administrate your customer contracts yourself)
              <b>while offering much cheaper premium to your customers.</b>
            </div>
            <div className="text text-title">
              HERE'S HOW IT WORKS:
            </div>
            <p className="text item-text">
              - Using technology, we have trimmed the fat from traditional insurance processes by rebuilding the entire insurance ecosystem from scratch.
            </p>
            <p className="text item-text">
              - As coverholder of the Lloyd's of London, we guarantee the best financial security.
            </p>
            <p className="text item-text">
              - At Qover we made insurance faster, cheaper and safer.
            </p>
          </div>
        </div>
      </div>
    </section>;
  }
}

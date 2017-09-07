import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import IconSettings from '../../images/About/WhyQover/icon-settings.svg';
import IconEnergy from '../../images/About/WhyQover/icon-energy.svg';
import IconDevAbout from '../../images/About/WhyQover/icon-dev-about.svg';
import lloyds from '../../images/About/WhyQover/logo-lloyds.svg';
import qover from '../../images/About/WhyQover/q-qover.svg';
import DropdownItem from './dropdownItem';

export default class WhyQover extends Component {
  whyItems = [
    {
      title: {
        id: "about.whyQover.desc1.title",
        text: "We build the product & the pricing ourselves",
      },
      icon: IconSettings,
      desc: [
        {
          id: "about.whyQover.desc1.p1",
          text: "The only viable way to truly innovate in Insurance is to behave as an Insurer from a product development & pricing perspective."},
        {
          id: "about.whyQover.desc1.p2",
          text: "This is what we do at Qover! We don't sell &quot;on the shelf&quot; products from an Insurer but we internally build our own products and make the pricing."},
        {
          id: "about.whyQover.desc1.p3",
          text: "So at Qover, you will find unique innovative products with a pricing sophistication that goes beyond what traditional insurers do."},
        {
          id: "about.whyQover.desc1.p4",
          text: "With Qover, you can differentiate yourself from the market with a much more competitive price for your customers."}
      ]
    },
    {
      title: {
        id: "about.whyQover.desc2.title",
        text: "We are strong : The Lloyd’s is behind us",
      },
      icon: IconEnergy,
      desc: [
        {
          id: "about.whyQover.desc2.p1",
          text: <img src={lloyds} alt="" />},
        {
          id: "about.whyQover.desc2.p2",
          text: "Lloyd’s is the world’s specialist insurance and reinsurance market, bringing together an outstanding concentration of underwriting expertise and talent. It is often the first to insure emerging, unusual and complex risks."},
        {
          id: "about.whyQover.desc2.p3",
          text: "Around 80 syndicates are underwriting insurance at Lloyd’s, covering all classes of business. Together they interact with thousands of brokers daily to create insurance solutions for businesses in over 200 countries and territories around the world. Lloyd’s insures the majority of FTSE 100 and Dow Jones industrial average companies."},
        {
          id: "about.whyQover.desc2.p4",
          text: "Lloyd’s enjoys strong financial security supported by excellent ratings. Visit www.lloyds.com for more information."}
      ]
    },
    {
      title: {
        id: "about.whyQover.desc3.title",
        text: "We are the only fully digital player",
      },
      icon: IconDevAbout,
      desc: [
        {
          id: "about.whyQover.desc3.p1",
          text: "Digital does not only mean &quot;on the internet&quot;. At Qover it means rethinking the front and back-office of an insurer optimizing processes by using technology."},
        {
          id: "about.whyQover.desc3.p2",
          text: "The result allows us to make instant decision, offer personalised products at the lowest rate."},
        {
          id: "about.whyQover.desc3.p3",
          text: "Check it out by yourself: no upfront fees, no hidden charges. By filling few basic details, your customer gets a personalised quote and buy the contract in real time. No more paper!"},
        {
          id: "about.whyQover.desc3.p4",
          text: "We have entirely digitalised the user experience. We created the smartest system around where you can access your own dashboard, manage your porfolio & follow your statistics."}
      ]
    }
  ];

  render() {
    return (<section className="section" id="why-qover">
      <h1 className="title text-turquoise">
        <FormattedMessage
          id="about.whyQover.title"
          defaultMessage={`Why Qover?`}
        />
      </h1>
      <div className="container">
        <div className="row text-grey">
        {
          this.whyItems.map((item, i) => (
            <DropdownItem title={item.title} key={i} image={item.icon} >
            {
              item.desc.map((el, j) => (
                <p className="text" key={j}>
                  <FormattedMessage id={el.id} defaultMessage={el.text} />
                </p>
              ))
            }
            </DropdownItem>
          ))
        }
        </div>
      </div>
       <div className="container" id="insertion">
         <div className="insertion row">
            <div className="item col-md-10 col-sm-12">
            <div className="qover-logo">
              <img src={qover} alt="qover" />
            </div>
            <b><FormattedMessage 
              id={`about.insertion.p1.part1`}
              defaultMessage={`With our business model, you keep the same level of commission`}
            /></b> <FormattedMessage 
              id={`about.insertion.p1.part2`}
              defaultMessage={`(more if you wish to administrate your customer contracts yourself)`}
            /> <b><FormattedMessage 
              id={`about.insertion.p1.part3`}
              defaultMessage={`while offering much cheaper premium to your customers.`}
            /></b>
            <div className="text text-title">
              <FormattedMessage 
                id={`about.insertion.subtitle`}
                defaultMessage={`Here's how it works:`}
              />
            </div>
            <p className="text item-text">
              <FormattedMessage 
                id={`about.insertion.p2.part1`}
                defaultMessage={`- Using technology, we have trimmed the fat from traditional insurance processes by rebuilding the entire insurance ecosystem from scratch.`}
              /><br />
              <FormattedMessage 
                id={`about.insertion.p2.part2`}
                defaultMessage={`- As coverholder of the Lloyd's of London, we guarantee the best financial security.`}
              /><br />
              <FormattedMessage 
                id={`about.insertion.p2.part3`}
                defaultMessage={`- At Qover we made insurance faster, cheaper and safer.`}
              />
            </p>
            </div>
         </div>
       </div>
    </section>);
  }
}

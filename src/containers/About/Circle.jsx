import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import QoverWheel from '../../images/About/Circle/qover-wheel.svg';
import qover from '../../images/About/WhyQover/q-qover.svg';

export default class Circle extends React.Component {
  render() {
    return <section className="section bg-pale-grey-two" id="circle">
      <div className="container d-none display" id="insertion">
        <div className="insertion row">
          <div className="item col-md-10 col-sm-12">
            <div className="qover-logo">
              <img src={qover} alt="qover" />
            </div>
            <b className="high-priority"><FormattedMessage
                id={`about.insertion.p1.part1`}
                defaultMessage={`With our business model, you keep the same level of commission`}
            /></b>
            <span className="high-priority"> <FormattedMessage
                id={`about.insertion.p1.part2`}
                defaultMessage={`(more if you wish to administrate your customer contracts yourself)`}
            />
            </span>
            <b className="high-priority"> <FormattedMessage
                id={`about.insertion.p1.part3`}
                defaultMessage={`while offering much cheaper premium to your customers.`}
            /></b>
            <div className="text text-title high-priority">
              <FormattedMessage
                  id={`about.insertion.subtitle`}
                  defaultMessage={`Here's how it works:`}
              />
            </div>
            <p className="text item-text high-priority">
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



      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 side-bar">
            <div className="left-side-bar item text-right bd-right">
              <h3 className="title text-blue">
                <FormattedMessage 
                  id={`about.circle.slice.title`}
                  defaultMessage={`Sliced`}
                />
              </h3>
              <p className="text text-grey" >
                <FormattedMessage 
                  id={`about.circle.slice.text`}
                  defaultMessage={`Personalized pick & choose insurance products.
                  Full range of non-life insurance products`}
                />
              </p>
            </div>
            <div className="item left-side-bar text-right bd-right" id="left-bar">
              <h3 className="title text-blue">
                <FormattedMessage 
                  id={`about.circle.onDemand.title`}
                  defaultMessage={`On-demand`}
                />
              </h3>
              <p className="text text-grey">
                <FormattedMessage 
                  id={`about.circle.onDemand.text`}
                  defaultMessage={`Coverage from 1 day up to 5 years. Cancel anytime`}
                />
              </p>
            </div>
        </div>
        <div className="icon col-md-5">
          <img src={QoverWheel} alt="qover-wheel" />
        </div>
        <div className="col-lg-3 side-bar">
          <div className="item right-side-bar bd-left">
              <h3 className="title text-blue">
                <FormattedMessage 
                  id={`about.circle.digital.title`}
                  defaultMessage={`Digital`}
                />
              </h3>
              <p className="text text-grey">
                <FormattedMessage 
                  id={`about.circle.digital.text`}
                  defaultMessage={`Systems & processes digitally reinvented`}
                />
              </p>
            </div>
            <div className="item right-side-bar bd-left">
              <h3 className="title text-blue"> 
                <FormattedMessage 
                  id={`about.circle.insurance.title`}
                  defaultMessage={`Insurance`}
                />
              </h3>
              <p className="text text-grey">
                <FormattedMessage 
                  id={`about.circle.insurance.text`}
                  defaultMessage={`Full- Fledged insurance solutions`}
                />
              </p>
            </div>
            <div className="item right-side-bar bd-left">
              <h3 className="title text-blue">
                <FormattedMessage 
                  id={`about.circle.infrastructure.title`}
                  defaultMessage={`Infrastructure`}
                />
              </h3>
              <p className="text text-grey">
                <FormattedMessage 
                  id={`about.circle.infrastructure.text`}
                  defaultMessage={`Easy-to-use and robust APIs for seamless integration`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

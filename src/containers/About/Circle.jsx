import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import QoverWheel from '../../images/About/Circle/qover-wheel.svg';

export default class Circle extends React.Component {
  render() {
    return <section className="section bg-pale-grey-two" id="circle">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 side-bar">
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
        <div className="col-md-3 side-bar">
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

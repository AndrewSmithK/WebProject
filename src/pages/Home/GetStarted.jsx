/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import Charts from '../../images/charts.png';

export default class GetStarted extends React.Component {
  render() {
    return <section className="section bg-blue text-white" id="get-started">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pr-5">
            <h2 className="secture-title text-left">
              Get Started in 1 Minute
            </h2>
            <div className="item">
              <h5 className="title">Select your product</h5>
              <p className="text text-left text-white">
                <b>Discover our library of insurance products.</b> Keep posted with the
                latest news. We are developing a lot of them for several countries.
              </p>
              <span className="circle text-turquoise">1</span>
            </div>
            <div className="item">
              <h5 className="title">Sign a B2B Agreement and get your token</h5>
              <p className="text text-left text-white">
                Before signing, you can of course play around with our <b>API</b>. Once you
                get a token, you can start selling immediately !
              </p>
              <span className="circle text-turquoise">2</span>
            </div>
            <div className="item">
              <h5 className="title">Choose a distribution model</h5>
              <p className="text text-left text-white">
                You are a techy? Consider the full integration of our solution in your
                system. Not familiar with technology? Don't worry, using our digital
                leads or referral distribution model is an easy game.
              </p>
              <span className="circle text-turquoise">3</span>
            </div>
            <div className="item">
              <h5 className="title">Enjoy being part of the future!</h5>
              <span className="circle text-turquoise">4</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shadow-image">
              <div style={{width: 510 + 'px', height: 485 + 'px', background: '#f00'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

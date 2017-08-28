import React from 'react';
import LloydsLogoSmall from '../../images/HomePage/Header/lloyds-logo-small.svg';
import imac from '../../images/HomePage/Header/imac.png';
import api from '../../images/HomePage/Header/api.svg';

export default class HomeHeader extends React.Component {
  render() {
    return (<section className="section" id="header">
      <div className="container">
        <div className="icon">
          <img src={LloydsLogoSmall} alt="lloyds-logo" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="left-block">
              <h1 className="text-white">
                Sell digitally branded innovative and
                traditional insurance to
                your customers
              </h1>
              <h4 className="text-white">
                Call us today. Start selling tomorrow!
              </h4>
              <button className="btn hidden-sm-down btn-turquoise">
                Request a demo
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mac-image">
              <img src={imac} alt="imac" />
              <img className="api-logo" src={api} alt="api" />
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

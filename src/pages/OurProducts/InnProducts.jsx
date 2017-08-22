/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import IconCancel from '../../images/icon-cancel.png';
import IconDiamont from '../../images/icon-diamont.png';
import IconDev from '../../images/icon-dev-big.png';
import IconRevenue from '../../images/icon-revenue-big.png';

export default class InnProducts extends React.Component {
  render() {
    return <section className="bg-light-grey" id="inn-products">
      <div className="header hide">
        <h2 className="title text-blue text-center">
          Our Amazing features
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon">
                <img src={IconCancel} alt="icon-revenur-big"/>
              </div>
              <div className="text text-grey">
                <b>Cancel anytime</b><br/>
                Cancel any time in real-time
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon">
                <img src={IconDiamont} style={{height: 50 + 'px'}} alt="icon-diamont"/>
              </div>
              <div className="text text-grey">
                <b>Your branding our ours. .</b><br/>
                Up to you.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon" >
                <img id="third-icon" src={IconDev} alt="icon-customer"/>
              </div>
              <div className="text text-grey">
                <b>Fully digital</b><br/>
                No paper anymore!
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon" >
                <img id="fourth-icon" src={IconRevenue} alt="lloyds-logo"/>
              </div>
              <div className="text text-grey">
                <b>Attractive comission</b><br/>
                Yet competitive premiums
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

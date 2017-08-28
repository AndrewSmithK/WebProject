import React from 'react';
import IconRevenueBig from '../../images/HomePage/InnProducts/icon-revenue-big.svg';
import IconDiamont from '../../images/HomePage/InnProducts/icon-diamont.png';
import IconCustomer from '../../images/HomePage/InnProducts/icon-customer.svg';
import LloydsLogo from '../../images/HomePage/InnProducts/lloyds-logo.svg';

export default class InnProducts extends React.Component {
  render() {
    return (<section className="bg-light-grey" id="inn-products">
      <div className="header hide">
        <h2 className="subtitle text-grey text-center">
          Innovative products - backed by the bests
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon">
                <img src={IconRevenueBig} alt="icon-revenur-big" />
              </div>
              <div className="text text-grey">
                <b>Attractive commission</b><br />
                Yet competitive premiums
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon">
                <img src={IconDiamont} style={{ height: `${50}px` }} alt="icon-diamont" />
              </div>
              <div className="text text-grey">
                <b>Your branding our ours.</b><br />
                Up to you.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon" >
                <img id="third-icon" src={IconCustomer} alt="icon-customer" />
              </div>
              <div className="text text-grey">
                <b>Customer friendly</b><br />
                Cancel any time
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon" >
                <img id="fourth-icon" src={LloydsLogo} alt="lloyds-logo" />
              </div>
              <div className="text text-grey">
                <b>Backed by the</b><br />
                Lloyd’s of London
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

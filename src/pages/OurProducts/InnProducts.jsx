import React from 'react';
import IconCancel from '../../images/OurProducts/icon-cancel.svg';
import IconDiamont from '../../images/HomePage/InnProducts/icon-diamont.png';
import IconDev from '../../images/OurProducts/icon-dev-big-our.svg';
import IconRevenue from '../../images/HomePage/InnProducts/icon-revenue-big.svg';
import IconCancelSmall from '../../images/OurProducts/icon-cancel-small.svg';
import IconDevSmall from '../../images/OurProducts/icon-dev-small.svg';
import IconDiamsSmall from '../../images/OurProducts/icon-diams-small.svg';
import IconRevenueSmall from '../../images/OurProducts/icon-revenue-small.svg';

export default class InnProducts extends React.Component {
  render() {
    return <section className="bg-light-grey" id="our-features">
      <div className="header hide">
        <h2 className="title text-blue text-center">
          Our Amazing features
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon hide">
                <img src={IconCancel} alt="icon-revenur-big" />
              </div>
              <div className="small-icon d-none display">
                <img src={IconCancelSmall} />
              </div>
              <div className="text text-grey">
                <b>Cancel anytime</b><br />
                Cancel any time in real-time
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon hide" style={{ height: 70 + 'px', background: '#f00' }}>
                {/*<img src={IconDiamont} style={{height: 50 + 'px' background: '#f00'}} alt="icon-diamont"/>*/}
              </div>
              <div className="small-icon d-none display" id="diamonds">
                <img src={IconDiamsSmall} />
              </div>
              <div className="text text-grey">
                <b>Your branding our ours.</b><br />
                Up to you.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon hide" >
                <img id="third-icon" src={IconDev} alt="icon-customer" />
              </div>
              <div className="small-icon d-none display">
                <img src={IconDevSmall} />
              </div>
              <div className="text text-grey">
                <b>Fully digital</b><br />
                No paper anymore!
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon hide" >
                <img id="fourth-icon" src={IconRevenue} alt="lloyds-logo" />
              </div>
              <div className="small-icon d-none display">
                <img src={IconRevenueSmall} />
              </div>
              <div className="text text-grey">
                <b>Attractive comission</b><br />
                Yet competitive premiums
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

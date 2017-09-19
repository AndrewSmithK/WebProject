import React from 'react';
import FormattedMessage from '../../components/phrase';

import IconCancel from '../../images/OurProducts/icon-cancel.svg';
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
          <FormattedMessage
            id={`products.innProducts.title`}
            defaultMessage={`Our Amazing features`}
          />
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="item text-center bg-white">
              <div className="icon hide">
                <img src={IconCancel} alt="icon-revenur-big" />
              </div>
              <div className="small-icon d-none display">
                <img src={IconCancelSmall} alt="" />
              </div>
              <div className="text text-grey">
                <b>
                  <FormattedMessage
                    id={`products.innProducts.cancel.title`}
                    defaultMessage={`Cancel anytime`}
                  />
                </b><br />
                <FormattedMessage
                  id={`products.innProducts.cancel.text`}
                  defaultMessage={`Cancel any time in real-time`}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="item text-center bg-white">
              <div className="icon hide">
                <img src={IconDiamsSmall} alt="icon-diamont"/>
              </div>
              <div className="small-icon d-none display" id="diamonds">
                <img src={IconDiamsSmall} alt="" />
              </div>
              <div className="text text-grey">
                <b>
                  <FormattedMessage
                    id={`products.innProducts.branding.title`}
                    defaultMessage={`Your branding our ours.`}
                  />
                </b><br />
                <FormattedMessage
                  id={`products.innProducts.cancel.text`}
                  defaultMessage={`Up to you.`}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="item text-center bg-white">
              <div className="icon hide" >
                <img id="third-icon" src={IconDev} alt="icon-customer" />
              </div>
              <div className="small-icon d-none display">
                <img src={IconDevSmall} alt="" />
              </div>
              <div className="text text-grey">
                <b>
                <FormattedMessage
                  id={`products.innProducts.digital.title`}
                  defaultMessage={`Fully digital`}
                />
                </b><br />
                <FormattedMessage
                  id={`products.innProducts.cancel.text`}
                  defaultMessage={`No paper anymore!`}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="item text-center bg-white">
              <div className="icon hide" >
                <img id="fourth-icon" src={IconRevenue} alt="lloyds-logo" />
              </div>
              <div className="small-icon d-none display">
                <img src={IconRevenueSmall} alt="" />
              </div>
              <div className="text text-grey">
                <b>
                <FormattedMessage
                  id={`products.innProducts.attractive.title`}
                  defaultMessage={`Attractive comission`}
                />
                </b><br />
                <FormattedMessage
                  id={`products.innProducts.cancel.text`}
                  defaultMessage={`Yet competitive premiums`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

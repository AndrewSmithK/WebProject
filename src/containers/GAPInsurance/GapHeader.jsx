import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

import ScreenshotApi from '../../images/OurProducts/GapInsurance/screeshot-api.png';

export default class GapHeader extends React.Component {
  render() {
    return <section className="section" id="header-gap-insurance">
      <div className="container">
        <Link to="/our-products">
          <div className="label">
            <i className="fa fa-angle-left" aria-hidden="true" /><FormattedMessage 
              id={`gap.header.btnBack`}
              defaultMessage={`ALL products`}
            />
          </div>
        </Link>
        <div className="row">
          <div className="col-md-7 p-0">
            <div className="block">
              <div className="logo-box">
                <div className="logo text-blue bg-white">
                  <FormattedMessage 
                    id={`gap.header.gapLogo`}
                    defaultMessage={`Gap Insurance`}
                  />
                </div>
              </div>
              <h1 className="text-white">
                <FormattedMessage 
                  id={`gap.title`}
                  defaultMessage={`Protect 100% of the purchase price of your car for up to 5 years.`}
                />
              </h1>
              <h4 className="text-white">
                <FormattedMessage 
                  id={`gap.descript`}
                  defaultMessage={`Our GAP Insurance can protect your customers
                  against the depreciation applied by their casco insurer
                  in case of a total loss or theft of their vehicle`}
                />
              </h4>
              <Link className="btn button btn-turquoise" to="#">
                <FormattedMessage 
                  id={`gap.btnRequest`}
                  defaultMessage={`Request access`}
                />
              </Link>
              <Link className="link text-white" to="#">
                <FormattedMessage 
                  id={`gap.linkToDoc`}
                  defaultMessage={`See the documentation`}
                /><i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-none display" style={{ background: '#ff0000', width: 280 + 'px', height: 160 + 'px' }}></div>
      </div>
      <div className="screenshot-api hide">
        <img src={ScreenshotApi} alt="screenshot-api"/>
      </div>
    </section>;
  }
}

import React from 'react';
import FormattedMessage from '../../components/phrase';

import IconRevenueBig from '../../images/HomePage/InnProducts/icon-revenue-big.svg';
import IconCustomer from '../../images/HomePage/InnProducts/icon-customer.svg';
import LloydsLogo from '../../images/HomePage/InnProducts/lloyds-logo.svg';
import IconDiamonds from '../../images/HomePage/InnProducts/icon-diamont.png';

export default class InnProducts extends React.Component {
  render() {
    return (<section className="bg-light-grey" id="inn-products">
      <div className="header">
        <h2 className="subtitle text-grey text-center">
          <FormattedMessage 
            id={`home.InnProducts.title`}
            defaultMessage={`Innovative products - backed by the bests`}
          />
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
                <b><FormattedMessage 
                  id={`home.InnProducts.item1.title`}
                  defaultMessage={`Attractive commission`}
                /></b><br />
                <FormattedMessage 
                  id={`home.InnProducts.item1.text`}
                  defaultMessage={`Yet competitive premiums`}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon">
                <img src={IconDiamonds} alt="icon-diamonds" />
              </div>
              <div className="text text-grey">
                <b><FormattedMessage 
                  id={`home.InnProducts.item2.title`}
                  defaultMessage={`Your branding our ours`}
                /></b><br />
                <FormattedMessage 
                  id={`home.InnProducts.item2.text`}
                  defaultMessage={`Up to you.`}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon" >
                <img id="third-icon" src={IconCustomer} alt="icon-customer" />
              </div>
              <div className="text text-grey">                  
                <b><FormattedMessage 
                  id={`home.InnProducts.item3.title`}
                  defaultMessage={`Customer friendly`}
                /></b><br />
                <FormattedMessage 
                  id={`home.InnProducts.item3.text`}
                  defaultMessage={`Cancel any time`}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item text-center bg-white">
              <div className="icon" >
                <img id="fourth-icon" src={LloydsLogo} alt="lloyds-logo" />
              </div>
              <div className="text text-grey">
                <b><FormattedMessage 
                  id={`home.InnProducts.item4.title`}
                  defaultMessage={`Backed by the`}
                /><br />
                <FormattedMessage 
                  id={`home.InnProducts.item4.text`}
                  defaultMessage={`Lloyd’s of London`}
                /></b>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>);
  }
}

import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import dieteren from '../../images/OurProducts/GapInsurance/logo-dieteren-white.svg';
import Fiat from '../../images/OurProducts/GapInsurance/logo-fiat.png';
import VW from '../../images/OurProducts/GapInsurance/logo-vw.png';
import Toyota from '../../images/OurProducts/GapInsurance/logo-toyota-3-x.png';
import Tesla from '../../images/OurProducts/GapInsurance/logo-tesla.png';

export default class GapPartners extends React.Component {
  render() {
    return <section className="section" id="gap-partners">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content">
              <h2 className="title">
                <FormattedMessage 
                  id={`gap.partners.title`}
                  defaultMessage={`They are already working with us`}
                />
              </h2>
              <div className="icons">
                <div className="icon">
                  <img src={dieteren} alt="dieteren" />
                </div>
                <div className="icon">
                  <img src={Fiat} alt="Fiat" />
                </div>
                <div className="icon">
                  <img src={VW} alt="Volkswagen" />
                </div>
                <div className="icon">
                  <img src={Toyota} alt="Toyota" />
                </div>
                <div className="icon">
                  <img src={Tesla} alt="Tesla" />
                </div>
              </div>
              {/*<div className="icon" style={{width: 51.1 + 'px', height: 51.1 + 'px', background: '#f00'}}/>*/}
              {/*<div className="icon" style={{width: 61.6 + 'px', height: 51.1 + 'px', background: '#f00'}}/>*/}
              {/*<div className="icon" style={{width: 105.1 + 'px', height: 51.1 + 'px', background: '#f00'}}/>*/}
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

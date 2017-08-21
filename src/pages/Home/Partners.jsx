/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import LogoLloyds from '../../images/parthners/logo-lloyds.png';
import LogoMunich from '../../images/parthners/logo-munich-re.png';
import LogoAnthemisColor from '../../images/parthners/logo-anthemis-color.png';
import LogoAmtrust from '../../images/parthners/logo-amtrust.png';
import LogoCjColeman from '../../images/parthners/logo-cj-coleman.png';
import LogoBelcube from '../../images/parthners/logo-belcube.png';
import LogoCallatayWouters from '../../images/parthners/logo-callatay-wouters.png';

export default class Partners extends React.Component {
  render() {
    return <section className="section bg-white" id="partners">
      <h3 className="subtitle text-grey">
        Our trusted partners
      </h3>
      <div className="container">
        <div className="row justify-content-around">
          <div className="icon">
            <img src={LogoLloyds} alt="logo-lloyds"/>
          </div>
          <div className="icon">
            <img src={LogoMunich} alt="logo-munich-re"/>
          </div>
          <div className="icon">
            <img src={LogoAnthemisColor} alt="logo-anthemis-color"/>
          </div>
          <div className="icon">
            <img src={LogoAmtrust} alt="logo-amtrust"/>
          </div>
          <div className="icon">
            <img src={LogoCjColeman} alt="logo-cj-coleman"/>
          </div>
          <div className="icon">
            <img src={LogoBelcube} alt="logo-belcube"/>
          </div>
          <div className="icon">
            <img src={LogoCallatayWouters} alt="logo-callatay-wouters"/>
          </div>
        </div>
      </div>
    </section>;
  }
}

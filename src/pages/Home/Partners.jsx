import React from 'react';
import LogoLloyds from '../../images/HomePage/Parthners/logo-lloyds.svg';
import LogoMunich from '../../images/HomePage/Parthners/logo-munich-re.svg';
import LogoAnthemisColor from '../../images/HomePage/Parthners/logo-anthemis-color.png';
import LogoAmtrust from '../../images/HomePage/Parthners/logo-amtrust.svg';
import LogoCjColeman from '../../images/HomePage/Parthners/logo-cj-coleman.svg';
import LogoBelcube from '../../images/HomePage/Parthners/logo-belcube.png';
import LogoCallatayWouters from '../../images/HomePage/Parthners/logo-callatay-wouters.png';

export default class Partners extends React.Component {
  render() {
    return <section className="section bg-white" id="partners">
      <h3 className="subtitle text-grey">
        Our trusted partners
      </h3>
      <div className="container">
        <div className="row justify-content-around">
          <div className="icon">
            <img src={LogoLloyds} alt="logo-lloyds" />
          </div>
          <div className="icon">
            <img src={LogoMunich} alt="logo-munich-re" />
          </div>
          <div className="icon" id="third">
            <img src={LogoAnthemisColor} alt="logo-anthemis-color" />
          </div>
          <div className="icon" id="cj">
            <img src={LogoAmtrust} alt="logo-amtrust" />
          </div>
          <div className="icon" id="cj">
            <img src={LogoCjColeman} alt="logo-cj-coleman" />
          </div>
          <div className="icon">
            <img src={LogoBelcube} alt="logo-belcube" />
          </div>
          <div className="icon" id="cj">
            <img src={LogoCallatayWouters} alt="logo-callatay-wouters" />
          </div>
        </div>
      </div>
    </section>;
  }
}

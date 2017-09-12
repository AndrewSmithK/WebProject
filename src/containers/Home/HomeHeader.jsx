import React from 'react';
import { Parallax as ParallaxBox } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import { FormattedMessage } from 'react-intl-phraseapp';

import LloydsLogoSmall from '../../images/HomePage/Header/lloyds-logo-small.svg';
import imacMobile from '../../images/HomePage/Header/imac-mobile.png';
import imac from '../../images/HomePage/Header/imac.png';
import api from '../../images/HomePage/Header/api.svg';
import bg from '../../images/HomePage/homepage-bg.png';

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMounted: false};
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (<section className="section" id="header">
    <Parallax bgImage={bg} strength={400}>
      <div className="container">
        <div className="header-space"></div>
        <div className="icon">
          <img src={LloydsLogoSmall} alt="lloyds-logo" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="left-block">
              <h1 className="text-white">
                <FormattedMessage 
                  id={`home.title`}
                  defaultMessage={`Sell digitally branded innovative and
                  traditional insurance to
                  your customers`}
                />
              </h1>
              <h4 className="text-white">                
                <FormattedMessage 
                  id={`home.callToAction`}
                  defaultMessage={`Call us today. Start selling tomorrow!`}
                />
              </h4>
              <div className="icon2">
                <img src={LloydsLogoSmall} alt="lloyds-logo" />
              </div>
              <button className="btn hidden-sm-down btn-turquoise">
                <FormattedMessage 
                  id={`home.btnDemo`}
                  defaultMessage={`Request a demo`}
                />
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mac-image m-hidden">
              <ParallaxBox
                offsetYMax={50}
                offsetYMin={-10}
                tag="imac">
                <img src={imac} alt="" />
              </ParallaxBox>
              <ParallaxBox
                className="api-logo"
                offsetYMax={170}
                offsetYMin={-100}
                tag="LloydsLogoSmall">
                <img src={api} alt="" />
              </ParallaxBox>
            </div>
            <div className="mac-image d-hidden">
              <img src={imacMobile} alt="imac" />
            </div>
          </div>
        </div>
      </div>
      </Parallax>
    </section>);
  }
}

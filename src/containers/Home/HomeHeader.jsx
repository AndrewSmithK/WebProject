import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from '../../components/ParalaxBackground.js';
import ParallaxComponent from '../../components/ParalaxComponent';
import FormattedMessage from '../../components/phrase';

import LloydsLogoSmall from '../../images/HomePage/Header/lloyds-logo-small.svg';
import imacMobile from '../../images/HomePage/Header/imac-mobile.png';
import imac from '../../images/HomePage/Header/imac.png';
import api from '../../images/HomePage/Header/api.svg';

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
      <Parallax className="parallax">
        <div className="container">
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
                <Link to="/registration" className="btn btn-demo btn-turquoise">
                  <FormattedMessage
                    id={`home.btnDemo`}
                    defaultMessage={`Request a demo`}
                  />
                </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mac-image paralax m-hidden">
              {this.state.isMounted ?
                <div>
                  <ParallaxComponent
                    speed={0.3}
                    scrollContainer={global.window}
                  >
                    <img src={imac} alt="" />
                  </ParallaxComponent>
                  <ParallaxComponent
                    className="api-logo"
                    speed={0.5}
                    scrollContainer={global.window}
                  >
                    <img src={api} alt="" />
                  </ParallaxComponent>
                </div> : ''
              }
            </div>
            <div className="mac-image no-paralax m-hidden">
              <img src={imac} alt="" />
              <img src={api} className="api-logo" alt="" />
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

import React from 'react';
import Parallax from '../../components/ParalaxBackground.js';
import { FormattedMessage } from 'react-intl-phraseapp';

export default class AboutHeader extends React.Component {
  render() {
    return (<section className="section" id="header-about">
      <Parallax speedDivider="3" className="parallax">
        <div className="container">
          <div className="row justify-content-center text-center">
            <h1 className="title text-white">
            <FormattedMessage
              id="about.headerTitle"
              defaultMessage={`About Qover`}
            />
          </h1>
            <h4 className="subtitle text-white">
              <FormattedMessage
                id="about.headerSubtitle1"
                defaultMessage={`Bringing insurance to a whole new level`}
              />
              <br className="d-none d-md-block"/>&nbsp;
              <FormattedMessage
                id="about.headerSubtitle2"
                defaultMessage={`– experience seamless digital service`}
              />
            </h4>
          </div>
        </div>
      </Parallax>
    </section>);
  }
}

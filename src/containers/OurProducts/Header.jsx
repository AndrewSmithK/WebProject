import React from 'react';
import { Parallax } from 'react-parallax';
import { FormattedMessage } from 'react-intl-phraseapp';

import bg from '../../images/OurProducts/future-our-products.png';

export default class Header extends React.Component {
  render() {
    return <section className="section" id="header-our-products">
      <Parallax bgImage={bg} strength={400}>
        <div className="header-space"></div>
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="title text-white text-center">
              <FormattedMessage 
                id={`products.title`}
                defaultMessage={`Our products`}
              />
            </h1>
            <h4 className="subtitle text-white text-center">
              <FormattedMessage 
                id={`products.subtitle`}
                defaultMessage={`We are working hard to build a full range of non-life insurance products.`}
              />
            </h4>
          </div>
        </div>
      </Parallax>
    </section>;
  }
}

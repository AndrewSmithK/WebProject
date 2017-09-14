import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

export default class ContactUs extends React.Component {
  render() {
    return <section className="section" id="contact-us">
      <div className="container">
        <div className="content row justify-content-center high-priority">
          <h2 className="title">
            <FormattedMessage
              id={`about.contactUs.title.part1`}
              defaultMessage={`Let’s make`}
            /> <b><FormattedMessage
              id={`about.contactUs.title.part2`}
              defaultMessage={`something great together`}
                  /></b>
          </h2>
          <h4 className="subtitle">
            <FormattedMessage
              id={`about.contactUs.subtitle`}
              defaultMessage={`You want to be a partner or wish to have more information about our products? Contact us!`}
            />
          </h4>
          <a href="/contact-us" className="btn hidden-sm-down btn-turquoise text-center">
            <FormattedMessage
              id={`about.contactUs.btnContactUs`}
              defaultMessage={`Contact us`}
            />
          </a>
        </div>
      </div>
    </section>;
  }
}

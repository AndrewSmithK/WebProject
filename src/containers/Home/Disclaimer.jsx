import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import { Link } from 'react-router-dom';

export default class Disclaimer extends React.Component {
  render() {
    return <div className="disclaimer bg-pale-grey-two">
      <div className="container p-0">
        <p className="text-grey">
          <i className="fa fa-star text-turquoise" aria-hidden="true"></i>
          <b><FormattedMessage 
            id={`home.disclaimer.title`}
            defaultMessage={`Disclaimer:`}
          /></b> <FormattedMessage 
            id={`home.disclaimer.text`}
            defaultMessage={`This website targets brokers and introducers willing to embrace the digital revolution in insurance.
            If you are a private individual, please visit our`}
          /> <Link to="#"><FormattedMessage 
            id={`home.disclaimer.link`}
            defaultMessage={`consumer website.`}
          /></Link>
        </p>
      </div>
    </div>;
  }
}

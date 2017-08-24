import React from 'react';

export default class Disclaimer extends React.Component {
  render() {
    return <div className="disclaimer bg-pale-grey-two">
      <div className="container p-0">
        <p className="text-grey">
          <i className="fa fa-star text-turquoise" aria-hidden="true"></i>
          <b>Disclaimer:</b>
          This website targets brokers and introducers willing to embrace the digital revolution in insurance.
          If you are a private individual, please visit our consumer <a href="#">consumer website.</a>
        </p>
      </div>
    </div>;
  }
}

import React from 'react';
import { Link } from 'react-router';

export default class TermsHeader extends React.Component {
  render() {
    return (<section className="section" id="terms-header">
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/">
            <div className="label">
              <i className="fa fa-angle-left" aria-hidden="true" />Back
            </div>
          </Link>
          <h1 className="title text-white text-center">
            Terms & Policies
          </h1>
        </div>
      </div>
    </section>);
  }
}

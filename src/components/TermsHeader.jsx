/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

export default class TermsHeader extends React.Component {
  render() {
    return <section className="section" id="terms-header">
      <div className="container">                         
        <div className="row justify-content-center">
          <h1 className="title text-white text-center">
            Terms & Policies
          </h1>
        </div>
      </div>
    </section>;
  }
}

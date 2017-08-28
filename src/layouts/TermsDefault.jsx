import React from 'react';

import TermsHeader from '../pages/TermsPolicies/components/TermsHeader';
import TermsSideBar from '../pages/TermsPolicies/components/TermsSideBar';

import '../pages/TermsPolicies/style.scss';

export default class TermsDefault extends React.Component {
  render() {
    return (<div className="app">
      <TermsHeader />
      <section className="section" id="terms-notices">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <TermsSideBar />
            </div>
            <div className="col-md-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}

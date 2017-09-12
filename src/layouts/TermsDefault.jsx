import React from 'react';

import TermsHeader from '../containers/TermsPolicies/components/TermsHeader';
import TermsSideBar from '../containers/TermsPolicies/components/TermsSideBar';

import '../containers/TermsPolicies/style.scss';
import './special.scss';

import Hiring from '../components/Hiring';
export default class TermsDefault extends React.Component {
  render() {
    return (<div className="app">
      <Hiring special={false}/>
      <TermsHeader />
      <section className="section" id="terms-notices">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-3">
              <TermsSideBar />
            </div>
            <div className="col-12 col-md-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}

import React from 'react';

import { Route } from 'react-router-dom';

import TermsHeader from '../components/TermsHeader';
import TermsSideBar from '../components/TermsSideBar';

import { Terms } from '../pages/Terms & Policies';

import '../styles/main.scss';

export default class TermsDefault extends React.Component {
  render() {
    return (<div className="app">
      <TermsHeader />
      <TermsSideBar />
      <div className="content">
        {this.props.children}
      </div>


      <Route path="/termsPolicies/notices" components={Terms} />
    </div>);
  }
}

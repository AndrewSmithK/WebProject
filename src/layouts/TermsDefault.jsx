import React from 'react';

import TermsHeader from '../components/TermsHeader';

import '../styles/main.scss';
import TermsSideBar from "../components/TermsSideBar";

export default class TermsDefault extends React.Component {
  render() {
    return <div className='app'>
      <TermsHeader/>
      <TermsSideBar/>
      <div className="content">
        {this.props.children}
      </div>
    </div>;
  }
}

import React from 'react';

import TopLine from '../components/TopLine';
import Footer from '../components/Footer';

import '../styles/main.scss';

export default class Default extends React.Component {
  render() {
    return <div className='app'>
      <TopLine></TopLine>
      <div className="content">
        {this.props.children}
      </div>
      <Footer></Footer>
    </div>;
  }
}

import React from 'react';

import './styles.scss';

import Header from './Header';
import Content from './Content';

export default class ContactUs extends React.Component {
  render() {
    return (<div className="container-fluid bg-pale-grey-two p-0">
      <Header />
      <Content />
    </div>);
  }
}

/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

import AboutHeader from './AboutHeader';
import WhyQover from './WhyQover';
import Circle from './Circle';
import WhoWeAre from './WhoWeAre';
import ContactUs from './ContactUs';

import './styles.scss';

export default class About extends React.Component {
  render() {
    return <div>
      <AboutHeader></AboutHeader>
      <WhyQover></WhyQover>
      <Circle></Circle>
      <WhoWeAre></WhoWeAre>
      <ContactUs></ContactUs>
    </div>;
  }
}

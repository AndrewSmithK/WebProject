/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

import GapHeader from './GapHeader';
import GapVideo from './GapVideo';
import GapCareAbout from './GapCareAbout';
import GapFactSheet from './GapFactSheet';
import GapSupport from './GapSupport'
import './styles.scss';

export default class GapInsurance extends React.Component {
  render() {
    return <div>
      <GapHeader/>
      <GapVideo/>
      <GapCareAbout/>
      <GapFactSheet/>
      <GapSupport/>
    </div>;
  }
}

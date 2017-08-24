import React from 'react';

import HomeHeader from './HomeHeader';
import Disclaimer from './Disclaimer';
import Advantages from './Advantages';
import GetStarted from './GetStarted';
import Explanation from './Explanation';
import GapInsurance from './GapInsurance';
import RobustApi from './RobustApi';
import InnProducts from '../../components/InnProducts';
import Partners from './Partners';
import Subscribe from '../../components/Subscribe';

import './styles.scss';

export default class Home extends React.Component {
  render() {
    return <div>
      <HomeHeader></HomeHeader>
      <Disclaimer></Disclaimer>
      <Advantages></Advantages>
      <GetStarted></GetStarted>
      <Explanation></Explanation>
      <GapInsurance></GapInsurance>
      <RobustApi></RobustApi>
      <InnProducts></InnProducts>
      <Partners></Partners>
      <Subscribe></Subscribe>
    </div>;
  }
}

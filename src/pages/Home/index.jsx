import React from 'react';

import HomeHeader from './HomeHeader';
import Disclaimer from './Disclaimer';
import Advantages from './Advantages';
import GetStarted from './GetStarted';
import Explanation from './Explanation';
import GapInsurance from './GapInsurance';
import RobustApi from './RobustApi';
import Partners from './Partners';
import InnProducts from './InnProducts';
import Subscribe from '../../components/Subscribe';

import './styles.scss';

export default class Home extends React.Component {
  render() {
    return (<div>
      <HomeHeader />
      <Disclaimer />
      <Advantages />
      <GetStarted />
      <Explanation />
      <GapInsurance />
      <RobustApi />
      <InnProducts />
      <Partners />
      <Subscribe />
    </div>);
  }
}

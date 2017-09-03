import React from 'react';

import Header from './Header';
import TradInnProd from './TradInnProd';
import InnProducts from './InnProducts';
import ProdInDev from './ProdInDev';
import Subscribe from '../../components/Subscribe';

import './styles.scss';

export default class OurProducts extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <TradInnProd></TradInnProd>
      <InnProducts title="Our Amazing features"></InnProducts>
      <ProdInDev></ProdInDev>
      <Subscribe></Subscribe>
    </div>;
  }
}

/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

import Header from './Header';
import TradInnProd from './TradInnProd';
import InnProducts from '../../components/InnProducts';
import ProdInDev from './ProdInDev';
import Subscribe from '../../components/Subscribe';

import './styles.scss';

export default class OurProducts extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <TradInnProd></TradInnProd>
      <InnProducts></InnProducts>
      <ProdInDev></ProdInDev>
      <Subscribe></Subscribe>
    </div>;
  }
}

/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import ValueChain from '../../images/value-chain-v-4.png';

export default class ProdInDev extends React.Component {
  render() {
    return <section class="bg-gray text-center" id="picture-block">
        <img src={ValueChain} alt="value-chain"/>
    </section>;
  }
}

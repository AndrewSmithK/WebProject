import React from 'react';
import ValueChain from '../../images/value-chain-v-4.png';

export default class PictureBlock extends React.Component {
  render() {
    return <section class="bg-gray text-center" id="picture-block">
        <img src={ValueChain} alt="value-chain"/>
    </section>;
  }
}

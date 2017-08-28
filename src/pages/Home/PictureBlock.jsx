import React from 'react';
import ValueChain from '../../images/HomePage/value-chain-v-4.svg';

export default class PictureBlock extends React.Component {
  render() {
    return <section className="bg-gray text-center" id="picture-block">
        <img src={ValueChain} alt="value-chain" />
    </section>;
  }
}

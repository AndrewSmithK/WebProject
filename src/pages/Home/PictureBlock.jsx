import React from 'react';

import logo from '../../images/HomePage/logo-qover-turquoise.svg';

export default class PictureBlock extends React.Component {
  render() {
    return <section className="section bg-gray text-center" id="picture-block">
      <h2 className="title">
        <b>Qover's value chain:</b><br />more efficient & cheaper
      </h2>
      <div className="container">
        <div className="infographic" />
        <div className="descripts">
          <div className="item text-left">
            <h4>The Lloyd’s</h4>
            <b>Loss Ratio</b><br />
            <p>They focus on
            carrying the risk</p>
          </div>
          <div className="item text-center">
            <img src={logo} className="logo" alt="logo" />
            <b>Expense Ratio</b><br />
            <p>We focus on offering fully digital and much
            more efficient products, pricing, IT and OPS</p>
          </div>
          <div className="item text-right">
            <h4>You</h4>
            <b>Commission Ratio</b><br />
            <p>You focus on the relation-
            ship with the customer</p>
          </div>
        </div>
      </div>
    </section>;
  }
}

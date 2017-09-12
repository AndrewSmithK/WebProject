import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import logo from '../../images/HomePage/logo-qover-turquoise.svg';

export default class Chain extends React.Component {
  render() {
    return <section className="section bg-gray text-center" id="picture-block">
      <h2 className="title">
        <b>
          <FormattedMessage 
            id={`home.chain.title.part1`}
            defaultMessage={`Qover's value chain:`}
          />
        </b><br />
        <FormattedMessage 
          id={`home.chain.title.part1`}
          defaultMessage={`more efficient & cheaper`}
        />
      </h2>
      <div className="container">
        <div className="row">
          <div className="infographic col-6 col-lg-12" />
          <div className="descripts col-6 col-lg-12">
            <div className="item">
              <h4>
                <FormattedMessage 
                  id={`home.chain.theLoyds`}
                  defaultMessage={`The Lloyd’s`}
                />
              </h4>
              <b>
                <FormattedMessage 
                  id={`home.chain.lossRatio`}
                  defaultMessage={`Loss Ratio`}
                />
              </b><br />
              <p>
                <FormattedMessage 
                  id={`home.chain.theyFocus`}
                  defaultMessage={`They focus on
                  carrying the risk`}
                />
              </p>
            </div>
            <div className="item">
              <img src={logo} className="logo" alt="logo" />
              <b>
                <FormattedMessage 
                  id={`home.chain.expenseRatio`}
                  defaultMessage={`Expense Ratio`}
                />
              </b><br />
              <p>
                <FormattedMessage 
                  id={`home.chain.weFocus`}
                  defaultMessage={`We focus on offering fully digital and much
                  more efficient products, pricing, IT and OPS`}
                />
              </p>
            </div>
            <div className="item">
              <h4>
                <FormattedMessage 
                  id={`home.chain.you`}
                  defaultMessage={`You`}
                />
              </h4>
              <b>
                <FormattedMessage 
                  id={`home.chain.commissionRatio`}
                  defaultMessage={`Commission Ratio`}
                />
              </b><br />
              <p>
                <FormattedMessage 
                  id={`home.chain.youFocus`}
                  defaultMessage={`You focus on the relation-
                  ship with the customer`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

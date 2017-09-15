import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

import DropDown from './DropDown';

import IconPhonelink from '../../images/OurProducts/GapInsurance/phonelink-material.svg';
import Pdf from '../../images/OurProducts/GapInsurance/icon-pdf.svg';

export default class GapSupport extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: {
        title: 'Belgium',
        image: ''
      }
    }
  }

  list = [
    {
      title: 'France',
      image: ''
    },
    {
      title: 'Belgium',
      image: ''
    }
  ]

  select(el) {
    console.log(el);
    this.setState({ selected: el });
  }

  render() {
    return <section className="section" id="gap-support">
      <h2 className="title text-blue">
        <FormattedMessage 
          id={`gap.support.title`}
          defaultMessage={`Support Center`}
        />
      </h2>
      <h4 className="subtitle text-grey">
        <FormattedMessage 
          id={`gap.support.subtitle`}
          defaultMessage={`Available in`}
        /> <DropDown
          list={this.list}
          selected={this.state.selected}
          select={this.select.bind(this)}></DropDown>
      </h4>
      <div className="container">
        <div className="row">
          { this.state.selected.title === 'Belgium' ? 
          <div className="belgium" >
            <div className="info">
              <h5 className="title text-grey">
                <FormattedMessage 
                  id={`gap.support.left.title`}
                  defaultMessage={`Important information`}
                />
              </h5>
              <ul className="info-list text-grey">
                <li className="item">
                  <div className="icon"><i className="material-icons">check</i></div>
                  <p className="text">
                    <FormattedMessage 
                      id={`gap.support.left.list.item1`}
                      defaultMessage={`The GAP insurance is only valid if the insured vehicle is covered by a full or light casco
                      insurance for the entire contract duration.`}
                    />
                  </p>
                </li>
                <li className="item">
                  <div className="icon"><i className="material-icons">check</i></div>
                  <p className="text">
                    <FormattedMessage 
                      id={`gap.support.left.list.item2`}
                      defaultMessage={`Overinsurance should be avoided. Consider deferring the GAP insurance start date if your
                      customer already has a 100% protection for a specific period of time.`}
                    />
                  </p>
                </li>
                <li className="item">
                  <div className="icon"><i className="material-icons">check</i></div>
                  <p className="text">
                    <FormattedMessage 
                      id={`gap.support.left.list.item3`}
                      defaultMessage={`The settlement received from the GAP insurance is based on the invoice value of the car.
                      Be aware that: Discounts your customer may have received at the purchase of the car
                      might not be available in the future.`}
                    />
                  </p>
                </li>
                <li className="item">
                  <div className="icon"><i className="material-icons">check</i></div>
                  <p className="text">
                    <FormattedMessage 
                      id={`gap.support.left.list.item4`}
                      defaultMessage={`When your customer's car reaches 5 years, a registered letter will be sent to him to advise
                      him the contract will end on the day of his car's 5th anniversary.`}
                    />
                  </p>
                </li>
                <li className="item">
                  <div className="icon"><i className="material-icons">check</i></div>
                  <p className="text">
                    <FormattedMessage 
                      id={`gap.support.left.list.item4`}
                      defaultMessage={`In case of total loss or theft of the vehicle, your customer must require our consent before
                      accepting any settlement from his casco insurer.`}
                    />
                  </p>
                </li>
              </ul>
              <p className="read-carefully text-grey">
                <FormattedMessage 
                  id={`gap.support.left.italic`}
                  defaultMessage={`Please read carefully all Terms & Conditions - The GAP insurance is underwritten by Lloyd’s Syndicate 5820, AmTrust
                  Syndicates Limited which is registered in England and Wales under company registration number 04434499 - The
                  GAP insurance is a non-life insurance product (branch 16).`}
                />
              </p>
            </div>
            <div className="files">
              <div className="item-paper">
                <h6 className="subtitle text-grey">
                  <FormattedMessage 
                    id={`gap.support.right.title`}
                    defaultMessage={`Document repository`}
                  />
                </h6>
                <div className="row">
                  <div className="item-link">
                    <div className="icon-pdf">
                      <img src={Pdf} alt="icon-pdf" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        <FormattedMessage 
                          id={`gap.support.right.GeneralPolicy`}
                          defaultMessage={`General Policy Conditions`}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="item-link">
                    <div className="icon-pdf">
                      <img src={Pdf} alt="icon-pdf" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        <FormattedMessage 
                          id={`gap.support.right.KeyFacts`}
                          defaultMessage={`Key Facts`}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="item-link">
                    <div className="icon-pdf">
                      <img src={Pdf} alt="icon-pdf" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        <FormattedMessage 
                          id={`gap.support.right.Brochure`}
                          defaultMessage={`Read our Brochure`}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="item-link">
                    <div className="icon-phonelink">
                      <img src={IconPhonelink} alt="icon-phoneLink" />
                    </div>
                    <div className="link-text">
                      <Link to="/" className="text text-blue">
                        <FormattedMessage 
                          id={`gap.support.right.FAQ`}
                          defaultMessage={`Discover our FAQ`}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : ''}

          { this.state.selected.title === 'France' ?
          <div className="france">
            <h3 className="text-grey">France</h3>
          </div> : ''}
        </div>
      </div>
    </section>
  }
}

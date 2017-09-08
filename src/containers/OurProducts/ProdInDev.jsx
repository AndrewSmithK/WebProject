import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import ActiveCheckBox from '../../images/OurProducts/icon-checkbox.svg';

export default class ProdInDev extends React.Component {
  render() {
    return <section className="section" id="prod-in-dev">
        <h2 className="title text-white text-left">
					<FormattedMessage
						id={`products.prodInDev.title`}
						defaultMessage={`Product in development`}
					/>
        </h2>
        <h4 className="subtitle text-white text-left">
					<FormattedMessage
						id={`products.prodInDev.subtitle`}
						defaultMessage={`Anything else you wish to see us developing? Vote for your product.`}
					/>
        </h4>
        <div className="container">
            <div className="row items">
                <div className="item col-md-5">
                  <div className="checkbox non-active" style={{width: 20 + 'px', height: 20 + 'px', background: '#f00', display: 'inline-block'}}></div>
									<h5 className="title non-active-text">
											<FormattedMessage
												id={`products.prodInDev.list.titem1.title`}
												defaultMessage={`Motor extended warranty`}
											/>
									</h5>
									<p className="text non-active-text">
										<FormattedMessage
											id={`products.prodInDev.list.titem1.text`}
											defaultMessage={`Extend the manufacturer warranty on your vehicle.
											Three variants covering mechanical and electronic failures. Wear and tear excluded.`}
										/>
									</p>
                </div>
                <div className="item col-md-5">
                  <div className="checkbox non-active" style={{width: 20 + 'px', height: 20 + 'px', background: '#f00', display: 'inline-block'}}></div>
									<h5 className="title non-active-text">
										<FormattedMessage
											id={`products.prodInDev.list.titem2.title`}
											defaultMessage={`ExteProduct Name`}
										/>
									</h5>
									<p className="text non-active-text">
										<FormattedMessage
											id={`products.prodInDev.list.titem2.text`}
											defaultMessage={`Description`}
										/>
									</p>
                </div>
            </div>
            <div className="row items">
                <div className="item col-md-5 hide">
                  <div className="checkbox">
                    <img src={ActiveCheckBox} alt="ActiveCheckBox" />
                  </div>
									<h5 className="title">
										<FormattedMessage
											id={`products.prodInDev.list.titem3.title`}
											defaultMessage={`Mandatory Third-Party-Liability`}
										/>
									</h5>
									<p className="text">
										<FormattedMessage
											id={`products.prodInDev.list.titem3.text`}
											defaultMessage={`Mandatory motor liability insurance for private cars and light commercial vehicles.`}
										/>
									</p>
                </div>
                <div className="item col-md-5">
                  <div className="checkbox non-active" style={{width: 20 + 'px', height: 20 + 'px', background: '#f00', display: 'inline-block'}}></div>
									<h5 className="title non-active-text">
										<FormattedMessage
											id={`products.prodInDev.list.titem4.title`}
											defaultMessage={`Rental damage`}
										/>
									</h5>
									<p className="text non-active-text">
										<FormattedMessage
											id={`products.prodInDev.list.titem4.text`}
											defaultMessage={`Cover for damages caused by tenants to your property.
											Two variants: long- or short term rental contracts.`}
										/>
									</p>
                </div>
                <div className="item col-md-5 d-none display">
                  <div className="checkbox">
                    <img src={ActiveCheckBox} alt="ActiveCheckBox" />
                  </div>
                  <h5 className="title">
										<FormattedMessage
											id={`products.prodInDev.list.titem3.title`}
											defaultMessage={`Mandatory Third-Party-Liability`}
										/>
									</h5>
									<p className="text">
										<FormattedMessage
											id={`products.prodInDev.list.titem3.text`}
											defaultMessage={`Mandatory motor liability insurance for private cars and light commercial vehicles.`}
										/>
									</p>
                </div>
            </div>
        </div>
				<button className="btn hidden-sm-down btn-turquoise">
					<FormattedMessage
						id={`products.prodInDev.btnVote`}
						defaultMessage={`Vote for this product`}
					/>
        </button>
    </section>;
  }
}

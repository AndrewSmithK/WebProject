import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import ActiveCheckBox from '../../images/OurProducts/icon-checkbox.svg';
import InactiveCheckBox from '../../images/OurProducts/circle.png';

const ProdItem = ({itemId, title, desc, className, onSelect, selected}) => {
	const handleClick = () => {
		onSelect(itemId);
	}

	return <div className={`item ${className} ${selected === itemId ? 'active' : ''}`} onClick={handleClick}>
			<div className="checkbox"></div>
			<h5 className="title">
					<FormattedMessage
						id={`products.prodInDev.list.item${itemId}.title`}
						defaultMessage={`${title}`}
					/>
			</h5>
			<p className="text">
				<FormattedMessage
					id={`products.prodInDev.list.item${itemId}.text`}
					defaultMessage={`${desc}`}
				/>
			</p>
		</div>
}

export default class ProdInDev extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: null
		}
	}

	select(n) {
		this.setState({
			selected: n
		})
	}

  render() {
    return <section className="section" id="prod-in-dev">
			<div className="container p-0">
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
							<ProdItem
								itemId="1"
								title="Motor extended warranty"
								desc="Extend the manufacturer warranty on your vehicle. Three variants covering mechanical and electronic failures. Wear and tear excluded."
								className="col-md-5"
								selected={this.state.selected}
								onSelect={this.select.bind(this)} />
							<ProdItem	
								itemId="2"
								title="Product Name"
								desc="Description"
								className="col-md-5"
								selected={this.state.selected}
								onSelect={this.select.bind(this)} />
            </div>
            <div className="row items">
							<ProdItem	
								itemId="3"
								title="Mandatory Third-Party-Liability"
								desc="Mandatory motor liability insurance for private cars and light commercial vehicles."
								className="col-md-5"
								selected={this.state.selected}
								onSelect={this.select.bind(this)} />
							<ProdItem	
								itemId="4"
								title="Rental damage"
								desc="Cover for damages caused by tenants to your property. Two variants: long- or short term rental contracts."
								className="col-md-5"
								selected={this.state.selected}
								onSelect={this.select.bind(this)} />
            </div>
				</div>
				<button className="btn hidden-sm-down btn-turquoise">
					<FormattedMessage
						id={`products.prodInDev.btnVote`}
						defaultMessage={`Vote for this product`}
					/>
        </button>
				</div>
    </section>;
  }
}

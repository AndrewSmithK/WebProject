import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import Carousel from './ProductsCarousel';
import Item from './ProductItem'

import AccidentHealth from '../../images/OurProducts/accident-health.png';
import Travel from '../../images/OurProducts/travel.png';
import JobLoss from '../../images/OurProducts/job-loss.png';
import Landlord from '../../images/OurProducts/landlord.png';

const mock = [{
  image: AccidentHealth,
  title: 'Accident & Health',
  text: 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  status: 'soon',
  category: 'motor',
  country: 'france'
}, {
  image: Travel,
  title: 'Travel',
  text: 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  status: 'soon',
  category: 'lifectyle',
  country: 'belgium'
}, {
  image: JobLoss,
  title: 'Job Loss',
  text: 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  status: 'soon',
  category: 'lifectyle',
  country: 'germany'
}, {
  image: Landlord,
  title: 'Landlord Insurance',
  text: 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  status: 'soon',
  category: 'motor',
  country: 'germany'
}]

export default class TradInnProd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
      country: 'belgium'
    }
  }

  changeCategory(category) {
    // this.setState({
    //   category
    // })
    console.log('test', category)
  }

  changeCountry(country) {

  }

  renderAllItems(items) {
    return items.map((item, index) => (
      <Item key={index} num={index} {...item} />
    ))
  }

  renderProductItems(items) {
    if (this.state.category === 'all') {
      items.forEach(item => {
        if (item.country === this.state.country) {
          return item
        }
      })
    }
  }

  render() {
    return (<section className="section" id="trad-inn-prod">
      <h2 className="title text-grey">
        <FormattedMessage 
          id={`products.traditional.title`}
          defaultMessage={`Traditional & innovative products`}
        />
      </h2>

      <div className="container filter-box">
        <div className="filter">
          <div className="title">Filter by categories</div>
          <div className="desktop-select">
            <button className="filter-item active">All</button>
            <button className="filter-item">Motor</button>
            <button className="filter-item">Lifestyle</button>
          </div>

          <div className="mobile-select">
            <select className="filter-item active">
              <option>All</option>
              <option>Motor</option>
              <option>Lifestyle</option>
            </select>
          </div>
        </div>

        <div className="filter">
          <div className="title">Filter by country</div>
          <select className="filter-item active">
            <option>Belgium</option>
            <option>Germany</option>
            <option>France</option>
          </select>
        </div>
      </div>
      <div className="clearfix"></div>

      <div className="container">
        <Carousel />
      </div>
      <div className="container only-desktop">
        <div className="row">
          {this.renderAllItems(mock)}
        </div>
      </div>
    </section>);
  }
}
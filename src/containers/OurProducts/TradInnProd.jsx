import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import _ from 'lodash'

import Carousel from './ProductsCarousel';
import Item from './ProductItem'

import AccidentHealth from '../../images/OurProducts/accident-health.png';
import Travel from '../../images/OurProducts/travel.png';
import JobLoss from '../../images/OurProducts/job-loss.png';
import Landlord from '../../images/OurProducts/landlord.png';

const mock = [{
  'image': AccidentHealth,
  'title': 'Accident & Health',
  'text': 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  'status': 'soon',
  'category': 'motor',
  'country': 'france'
}, {
  'image': Travel,
  'title': 'Travel',
  'text': 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  'status': 'soon',
  'category': 'lifestyle',
  'country': 'belgium'
}, {
  'image': JobLoss,
  'title': 'Job Loss',
  'text': 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  'status': 'soon',
  'category': 'lifestyle',
  'country': 'germany'
}, {
  'image': Landlord,
  'title': 'Landlord Insurance',
  'text': 'Protect you from the financial loss from an accident, whether it occurs at home or at work.',
  'status': 'soon',
  'category': 'motor',
  'country': 'germany'
}]

export default class TradInnProd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'all',
      country: 'germany',
      items: []
    }
  }

  changeCategory(category) {
    console.log(this.state.country)
    this.setState({
      category: category,
      items: category === 'all' ?
        _.filter(mock, { 'country': this.state.country }) :
        _.filter(mock, { 'category': category, 'country': this.state.country })
    })
  }

  changeCategoryEvent(event) {
    const country = this.state.country
    const category = event.target.value
    this.setState({
      category: category,
      items: category === 'all' ?
        _.filter(mock, { 'country': country }) :
        _.filter(mock, { 'category': category, 'country': country })
    })
  }

  changeCountry(event) {
    const country = event.target.value
    const category = this.state.category
    this.setState({
      country: country,
      items: category === 'all' ?
        _.filter(mock, { 'country': country }) :
        _.filter(mock, { 'category': category, 'country': country })
    })
  }

  renderAllItems(items) {
    return items.map((item, index) => (
      <Item key={index} num={index} {...item} />
    ))
  }

  componentWillMount() {
    this.setState({
      items: mock
    })
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
            <button onClick={() => this.changeCategory('all')} className="filter-item active">All</button>
            <button onClick={() => this.changeCategory('motor')} className="filter-item">Motor</button>
            <button onClick={() => this.changeCategory('lifestyle')} className="filter-item">Lifestyle</button>
          </div>

          <div className="mobile-select">
            <select onChange={this.changeCategoryEvent.bind(this)} className="filter-item active">
              <option value="all">All</option>
              <option value="motor">Motor</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>
        </div>

        <div className="filter">
          <div className="title">Filter by country</div>
          <select onChange={this.changeCountry.bind(this)} className="filter-item active">
            <option value="belgium">Belgium</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
          </select>
        </div>
      </div>
      <div className="clearfix"></div>

      <div className="container">
        <Carousel items={this.state.items} />
      </div>
      <div className="container only-desktop">
        <div className="row">
          {this.renderAllItems(this.state.items)}
        </div>
      </div>
    </section>);
  }
}
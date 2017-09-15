import React from 'react';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
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
      country: 'all',
      items: []
    }
  }

  changeCountry(event, index, country) {
    const category = this.state.category
    if (country === 'all') {
      this.setState({
        country: country,
        items: category === 'all' ?
          _.filter(mock, {}) :
          _.filter(mock, { 'category': category })
      })
    } else {
      this.setState({
        country: country,
        items: category === 'all' ?
          _.filter(mock, { 'country': country }) :
          _.filter(mock, { 'category': category, 'country': country })
      })
    }
  }

  changeCategory(event, index, category) {
    const country = this.state.country
    if (category === 'all') {
      this.setState({
        category: category,
        items: country === 'all' ?
          _.filter(mock, {}) :
          _.filter(mock, { 'country': country })
      })
    } else {
      this.setState({
        category: category,
        items: country === 'all' ?
          _.filter(mock, { 'category': category }) :
          _.filter(mock, { 'category': category, 'country': country })
      })
    }
  }

  changeCategoryButton(category) {
    const country = this.state.country
    if (category === 'all') {
      this.setState({
        category: category,
        items: country === 'all' ?
          _.filter(mock, {}) :
          _.filter(mock, { 'country': country })
      })
    } else {
      this.setState({
        category: category,
        items: country === 'all' ?
          _.filter(mock, { 'category': category }) :
          _.filter(mock, { 'category': category, 'country': country })
      })
    }
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
            <button onClick={() => this.changeCategoryButton('all')} className={`filter-item ${this.state.category === 'all' ? 'active' : '' }`}>All</button>
            <button onClick={() => this.changeCategoryButton('motor')} className={`filter-item ${this.state.category === 'motor' ? 'active' : '' }`}>Motor</button>
            <button onClick={() => this.changeCategoryButton('lifestyle')} className={`filter-item ${this.state.category === 'lifestyle' ? 'active' : '' }`}>Lifestyle</button>
          </div>

          <div className="select-field mobile-select">
            <SelectField
            fullWidth
            value={this.state.category}
            onChange={this.changeCategory.bind(this)}
            style={{
              width: '100%' 
            }}
            iconStyle={{
              fill: '#317bda',
              paddingRight: '0',
              right: '-12px'
            }}
            labelStyle={{
              color: '#317bda',
              fontSize: '16px',
              fontWeight: 'bold',
              letterSpacing: '0.6px',
              paddingRight: '20px'
            }}
            underlineStyle={{
              borderBottomWidth: '2px',
              borderBottomColor: '#317bda',
            }}
          >
          <MenuItem value={'all'} primaryText="All" />
          <MenuItem value={'motor'} primaryText="Motor" />
          <MenuItem value={'lifestyle'} primaryText="Lifestyle" />
        </SelectField>
          </div>
        </div>

        <div className="filter">
          <div className="title">Filter by country</div>

          <div className="select-field">
            <SelectField
              fullWidth
              value={this.state.country}
              onChange={this.changeCountry.bind(this)}
              style={{
                width: '100%'
              }}
              iconStyle={{
                fill: '#317bda',
                paddingRight: '0',
                right: '-12px'
              }}
              labelStyle={{
                color: '#317bda',
                fontSize: '16px',
                fontWeight: 'bold',
                letterSpacing: '0.6px',
                paddingRight: '20px'
              }}
              underlineStyle={{
                borderBottomWidth: '2px',
                borderBottomColor: '#317bda',
              }}
            >
            <MenuItem value={'all'} primaryText="All" />
            <MenuItem value={'belgium'} primaryText="Belgium" />
            <MenuItem value={'germany'} primaryText="Germany" />
            <MenuItem value={'france'} primaryText="France" />
          </SelectField>
        </div>

        </div>
      </div>

      <div className="clearfix"></div>

      <div className="container only-mobile">
        {this.state.items.length > 0 ?
          <Carousel items={this.state.items} /> :
          <div className="container no-results">no results found</div>
        }
      </div>
      <div className="container only-desktop">
        <div className="row justify-content-center">
          {this.state.items.length > 0 ?
            this.renderAllItems(this.state.items) :
            <div className="container no-results">no results found</div>
          }
        </div>
      </div>
    </section>);
  }
}
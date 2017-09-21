import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import DropDown from './DropDown';
import BelgiumSup from './BelgiumSup';
import FranceSup from './FranceSup';

import FlagBelgium from '../../images/Registration/flag-belgium.svg'

export default class GapSupport extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: {
        title: 'Belgium',
        flag: FlagBelgium
      }
    }
  }

  list = [
    {
      title: 'Belgium',
      flag: FlagBelgium
    },
    {
      title: 'Other',
      flag: ''
    }
  ]

  select(el) {
    if (el.title ==='Other') {
      typeof window !== 'undefined' && window.location.replace('/our-products')
      return
    }
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
          <BelgiumSup /> : ''}

          { this.state.selected.title === 'France' ?
          <FranceSup /> : ''}
        </div>
      </div>
    </section>
  }
}

import React, { Component } from 'react';
import { FormattedHTMLMessage } from 'react-intl-phraseapp';

export default class DropdownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.visibilityClick = this.visibilityClick.bind(this);
  }

  visibilityClick() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="item col-md-4 col-sm-12">
        <div className="icon">
          <img src={this.props.image} alt="icon-settings" />
        </div>
        <h4 className="title text-blue" onClick={this.visibilityClick}>
          <b><FormattedHTMLMessage
            id={this.props.title.id}
            defaultMessage={this.props.title.text}
          /></b>
          <span className="arrow d-hidden">
            <i className={this.state.visible ? 'fa fa-angle-up' : 'fa fa-angle-down'} aria-hidden="true" />
          </span>
          {this.props.logo ? <img src={this.props.logo} className="logo" alt="" /> : ''}
        </h4>
        <div className={`${this.state.visible ? 'open' : ''} desc`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


import React, { Component } from 'react';

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
        <h4 className="title text-blue">
          <b>{this.props.title}</b>
          <span className="d-none display" onClick={this.visibilityClick}>
            <i className={this.state.visible ? 'fa fa-angle-up' : 'fa fa-angle-down'} aria-hidden="true" />
          </span>
        </h4>
        <div className={this.state.visible ? 'display' : 'hide'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


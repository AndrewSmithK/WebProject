
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TermsItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
    };
    this.activeState = this.activeState.bind(this);
  }

  activeState(){
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <div className={`${this.state.active ? 'active' : ''} item-title`} onClick={this.activeState}>
        <Link to={this.props.path}>
          {this.props.title}
        </Link>
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}


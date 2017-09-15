import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isOpened: false,}
  }

  handleClickOutside() {
    this.close();
  }

  toggle() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  close() {
    this.setState({ isOpened: false });
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.selected);
  }

  handleChange(item) {
    this.props.select(item);
    this.close();
  }

  render() {
    return (<div className={`cust-select${this.state.isOpened ? ' open' : ''}`}>
      <div className="selected" onClick={this.toggle.bind(this)}>
        <h4>{this.props.selected.title}</h4>
        <img src={this.props.selected.flag} alt="" />
        <span className="arrow">
          <i className={`fa fa-angle-${this.state.isOpened ? 'up' : 'down'}`} aria-hidden="true"></i>
        </span>
      </div>
      <div className="list">
        {this.props.list.map((item, i) => (
          <div className="item" key={i} onClick={this.handleChange.bind(this, item)}>
            <span>{item.title}</span>
            <img src={item.flag} alt="" />
          </div>
        ))}
      </div>
    </div>)
  }
}

export default enhanceWithClickOutside(DropDown);
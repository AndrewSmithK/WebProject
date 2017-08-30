
import React from 'react';

// const visibilityClick = (state) => {
//   this.setState ({
//     state: !state,
//   });
// };

const dropdownItem = (title) => (
  <div className="item col-md-4 col-sm-12">
    <div className="item-icon">
      <img src={image} alt="icon-dev-about" />
    </div>
    <h4 className="title text-blue">
      <b>{title}</b>
    </h4>
    <div className={this.state.visible3 ? 'display' : 'hide'} >
      {this.props.children}
    </div>
  </div>
  );

export default dropdownItem;

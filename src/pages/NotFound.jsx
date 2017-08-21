/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return <div className="bg-blue text-center">
      <div style={{paddingBottom: 90 + 'px'}}></div>
      <h2 class="title">Page NotFound</h2>
    </div>;
  }
}

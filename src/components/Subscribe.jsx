/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

export default class Subscribe extends React.Component {
  render() {
    return <section className="section bg-light-grey" id="subscribe">
      <div className="text-center">
        <h4 className="title text-grey">
          Keep up with the latest features
        </h4>
      </div>
      <div className="container">
        <div className="row ">
          <form>
            <input type="email" placeholder="please@qover.me" />
            <button type="submit" className="btn bg-turquoise text-white">Subscribe</button>
          </form>
        </div>
      </div>
    </section>;
  }
}

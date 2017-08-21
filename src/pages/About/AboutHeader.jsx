/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

export default class AboutHeader extends React.Component {
  render() {
    return <section className="section" id="header-about">
	    <div className="container">
	        <div className="row justify-content-center">
	            <h1 className="title text-white text-center">
	                About Qover
	            </h1>
	            <h4 className="subtitle text-white text-center">
	                Bringing insurance to a whole new level
	                – experience seamless digital service
	            </h4>
	        </div>
	    </div>
	</section>;
  }
}

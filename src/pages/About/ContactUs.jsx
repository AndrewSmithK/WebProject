/* eslint react/prefer-stateless-function: 0 */

import React from 'react';

export default class ContactUs extends React.Component {
  render() {
    return <section className="section" id="contact-us">
        <div className="container">
            <div className="content row justify-content-center">
                <h2 className="title">
                    Let’s make something great together
                </h2>
                <h4 className="subtitle">
                    You want to be a partner or wish to have more information about our products? Contact us!
                </h4>
                <a className="btn hidden-sm-down btn-turquoise text-center">Contact us</a>
            </div>
        </div>
    </section>;
  }
}

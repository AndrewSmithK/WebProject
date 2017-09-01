import React from 'react';
import { Link } from 'react-router-dom';

export default class ContactUs extends React.Component {
  render() {
    return <section className="section" id="contact-us">
        <div className="container">
            <div className="content row justify-content-center">
                <h2 className="title">
                    Let’s make <b>something great together</b>
                </h2>
                <h4 className="subtitle">
                    You want to be a partner or wish to have more information about our products? Contact us!
                </h4>
                <Link to="/contact-us" className="btn hidden-sm-down btn-turquoise text-center">Contact us</Link>
            </div>
        </div>
    </section>;
  }
}

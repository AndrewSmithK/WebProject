import React from 'react';

export default class Header extends React.Component {
  render() {
    return <section className="section" id="header-our-products">
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="title text-white text-center">
                    Our products
                </h1>
                <h4 className="subtitle text-white text-center">
                    We are working hard to build a full range of non-life insurance products.
                </h4>
            </div>
        </div>
    </section>;
  }
}

import React from 'react';

import ActiveCheckBox from '../../images/OurProducts/icon-checkbox.svg';

export default class ProdInDev extends React.Component {
  render() {
    return <section className="section" id="prod-in-dev">
        <h1 className="title text-white text-left">
            Product in development
        </h1>
        <h4 className="subtitle text-white text-left">
            Anything else you wish to see us developing? Vote for your product.
        </h4>
        <div className="container">
            <div className="row items">
                <div className="item col-md-5">
                  <div className="checkbox non-active" style={{width: 20 + 'px', height: 20 + 'px', background: '#f00', display: 'inline-block'}}></div>
                    <h5 className="title non-active-text">
                        Motor extended warranty
                    </h5>
                    <p className="text non-active-text">
                        Extend the manufacturer warranty on your vehicle.
                        Three variants covering mechanical and electronic failures. Wear and tear excluded.
                    </p>
                </div>
                <div className="item col-md-5">
                  <div className="checkbox non-active" style={{width: 20 + 'px', height: 20 + 'px', background: '#f00', display: 'inline-block'}}></div>
                    <h5 className="title non-active-text">
                        Product Name
                    </h5>
                    <p className="text non-active-text">
                        Description
                    </p>
                </div>
            </div>
            <div className="row items">
                <div className="item col-md-5 hide">s
                  <div className="checkbox">
                    <img src={ActiveCheckBox} alt="ActiveCheckBox" />
                  </div>
                    <h5 className="title">
                        Mandatory Third-Party-Liability
                    </h5>
                    <p className="text">
                        Mandatory motor liability insurance for private cars and light commercial vehicles.
                    </p>
                </div>
                <div className="item col-md-5">
                  <div className="checkbox non-active" style={{width: 20 + 'px', height: 20 + 'px', background: '#f00', display: 'inline-block'}}></div>
                    <h5 className="title non-active-text">
                        Rental damage
                    </h5>
                    <p className="text non-active-text">
                        Cover for damages caused by tenants to your property.
                        Two variants: long- or short term rental contracts.
                    </p>
                </div>
                <div className="item col-md-5 d-none display">
                  <div className="checkbox">
                    <img src={ActiveCheckBox} alt="ActiveCheckBox" />
                  </div>
                  <h5 className="title">
                    Mandatory Third-Party-Liability
                  </h5>
                  <p className="text">
                    Mandatory motor liability insurance for private cars and light commercial vehicles.
                  </p>
                </div>
            </div>
        </div>
        <button className="btn hidden-sm-down btn-turquoise">
            Vote for this product
        </button>
    </section>;
  }
}

import React, { Component } from 'react'
import Slider from 'react-slick'
import { FormattedMessage } from 'react-intl-phraseapp'
import { Link } from 'react-router-dom'

import './ProductsCarousel.scss'

export default class ProductsCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            centerMode: true
        }
        return (
            <div className="products-carousel">
                <Slider {...settings}>
                    {
                      this.props.items.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                          <div className={`item text-center bg-white ${item.status}`}>
                            <div className="trapezoid"></div>
                            <div className="icon-box">
                              <div className="icon">
                                <img src={item.image} alt="accident-health" />
                              </div>
                            </div>
                            <div className="text-container">
                              <h5 className="title">
                                <FormattedMessage
                                  id={`products.traditional.${index}.title`}
                                  defaultMessage={item.title}
                                />
                              </h5>
                              <p className="text">
                                <FormattedMessage
                                  id={`products.traditional.${index}.text`}
                                  defaultMessage={item.text}
                                />
                              </p>
                            </div>
                            {
                              item.status === 'soon' ?
                                <button className="btn">
                                  <FormattedMessage
                                    id={`products.traditional.comingSoon`}
                                    defaultMessage='More info'
                                  />
                                </button> :
                                <Link to={item.url} className="btn">
                                  <FormattedMessage
                                    id={`products.traditional.moreІnfo`}
                                    defaultMessage='More info'
                                  />
                                </Link>
                            }
                        </div>
                      </div>
                    ))
                  }
                </Slider>
            </div>
        )
    }
}

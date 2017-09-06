import React, { Component } from 'react'
import Slider from 'react-slick'
import { FormattedMessage } from 'react-intl-phraseapp';

import './ProductsCarousel.scss'

export default class ProductsCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            centerMode: true,
            initialSlide: 1
        }
        return (
            <div className="products-carousel">
                <Slider {...settings}>
                    {
                        this.props.items.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="item text-center bg-white">
                                    <div className="icon">
                                        <img src={item.image} alt="accident-health" />
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
                                    {item.status === 'soon' ?
                                        <button className="btn btn-disabled">
                                            <FormattedMessage
                                                id={`products.traditional.ComingSoon`}
                                                defaultMessage={`Coming soon`}
                                            />
                                        </button> :
                                        <button className="btn">
                                            <FormattedMessage
                                                id={`products.traditional.ComingSoon`}
                                                defaultMessage={`More info`}
                                            />
                                        </button>
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
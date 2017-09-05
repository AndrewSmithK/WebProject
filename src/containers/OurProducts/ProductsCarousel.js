import React from 'react'
import Slider from 'react-slick'

import AccidentHealth from '../../images/OurProducts/accident-health.png';
import Travel from '../../images/OurProducts/travel.png';
import JobLoss from '../../images/OurProducts/job-loss.png';
import Landlord from '../../images/OurProducts/landlord.png';

import './ProductsCarousel.scss'

const carouselItem = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="item text-center bg-white">
                <div className="icon">
                    <img src={props.image} alt="accident-health" />
                </div>
                <div className="text-container">
                    <h5 className="title">{props.title}</h5>
                    <p className="text">
                        {props.text}
                    </p>
                </div>
                <button className="btn btn-disabled">{props.buttonText}</button>
            </div>
        </div>
    )
}

export default () => {
    const settings = {
        dots: true,
        infinite: false,
        centerMode: true,
        initialSlide: 1
    }
    return (
        <div className="products-carousel">
            <Slider {...settings}>
                <div className="col-lg-3 col-md-6">
                    <div className="item text-center bg-white">
                        <div className="icon">
                            <img src={AccidentHealth} alt="accident-health" />
                        </div>
                        <div className="text-container">
                            <h5 className="title">Accident & Health</h5>
                            <p className="text">
                                Protect you from the financial loss from an accident,
                    whether it occurs at home or at work.
                    </p>
                        </div>
                        <button className="btn btn-disabled">Coming soon</button>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="item text-center bg-white">
                        <div className="icon">
                            <img src={AccidentHealth} alt="accident-health" />
                        </div>
                        <div className="text-container">
                            <h5 className="title">Accident & Health</h5>
                            <p className="text">
                                Protect you from the financial loss from an accident,
                    whether it occurs at home or at work.
                    </p>
                        </div>
                        <button className="btn btn-disabled">Coming soon</button>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="item text-center bg-white">
                        <div className="icon">
                            <img src={AccidentHealth} alt="accident-health" />
                        </div>
                        <div className="text-container">
                            <h5 className="title">Accident & Health</h5>
                            <p className="text">
                                Protect you from the financial loss from an accident,
                    whether it occurs at home or at work.
                    </p>
                        </div>
                        <button className="btn btn-disabled">Coming soon</button>
                    </div>
                </div>
            </Slider>
        </div>
    )

}

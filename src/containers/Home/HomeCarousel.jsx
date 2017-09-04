import React, { Component } from 'react';
import Slider from 'react-slick';

import './HomeCarousel.scss';
import emerce from '../../images/HomePage/Carousel/emerce.png';
import echo from '../../images/HomePage/Carousel/echo.png';
import techeu from '../../images/HomePage/Carousel/tech-eu.png';
import detijd from '../../images/HomePage/Carousel/de-tijd.png';
import datanews from '../../images/HomePage/Carousel/datanews.png';

const NextArrow = (props) => {
  const { className, style, onClick, next } = props;
  const onClickAll = () => {
    onClick();
    next();
  }
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClickAll}
    ><i className="fa fa-angle-right" aria-hidden="true"></i></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick, previous } = props;
  const onClickAll = () => {
    onClick();
    previous();
  }
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClickAll}
    ><i className="fa fa-angle-left" aria-hidden="true"></i></div>
  );
};

export default class HomeCarousel extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  test() {
    console.log('test')
  }
  render() {
    const settings = {
      customPaging(i) {
        const images = [emerce, echo, techeu, detijd, datanews];
        return <a><img src={images[i++]} alt="test" /></a>;
      },
      dots: false,
      // infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      nextArrow: <NextArrow next={this.next} />,
      prevArrow: <PrevArrow previous={this.previous} />
    };
    const settings2 = {
      centerMode: true,
      draggable: false,
      arrows: false,
      // infinite: true,
      initialSlide: 2,
      responsive: [{
        breakpoint: 768, settings: { slidesToShow: 1 }
      }, {
        breakpoint: 10000, settings: { slidesToShow: 5 }
      }]
    };
    return (
      <section id="home-carousel">
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div>
            <div className="container">
              <h2 className="title">
                The whole world is talking <br /> about Qover
              </h2>
              <div className="belgian-financial">
                « Belgian financial technology startup Qover has raised €5.5 million <br /> in a Series A round ledby Anthemis. »
              </div>
              <a href="#" className="read-article">Read the full article<i className="fa fa-angle-right" aria-hidden="true" /></a>
              <div className="text">
                Jonathan Keane, <span>Tech. EU</span>
              </div>
            </div>
          </div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </Slider>
        <div className="bottom-slider">
          <Slider ref={c => this.slider = c } {...settings2}>
            <div>
              <div className="bottom-slider-image">
                <img src={emerce} alt="test" />
              </div>
            </div>
            <div>
              <div className="bottom-slider-image">
                <img src={echo} alt="test" />
              </div>
            </div>
            <div>
              <div className="bottom-slider-image">
                <img src={techeu} alt="test" />
              </div>
            </div>
            <div>
              <div className="bottom-slider-image">
                <img src={detijd} alt="test" />
              </div>
            </div>
            <div>
              <div className="bottom-slider-image">
                <img src={datanews} alt="test" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';
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
    if (typeof(onClick) === 'function') {
      onClick();
      next();
    }
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
    if (typeof(onClick) === 'function') {
      onClick();
      previous();
    }
  }
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClickAll}
    ><i className="fa fa-angle-left" aria-hidden="true"></i></div>
  );
};

const CarouselItem = () => (
  <div className="container">
    <h2 className="title">
      <FormattedMessage 
        id={`home.carousel.title.part1`}
        defaultMessage={`The whole world is talking`}
      /><br />
      <FormattedMessage 
        id={`home.carousel.title.part2`}
        defaultMessage={`about Qover`}
      />
    </h2>
    <div className="belgian-financial">
      « <FormattedMessage 
        id={`home.carousel.quote.part1`}
        defaultMessage={`Belgian financial technology startup Qover has raised €5.5 million`}
      /><br /> 
      <FormattedMessage 
        id={`home.carousel.quote.part2`}
        defaultMessage={`in a Series A round ledby Anthemis.`}
      /> »
    </div>
    <Link onClick={(e) => {e.preventDefault()}} to="#" className="read-article">
      <FormattedMessage 
        id={`home.carousel.linkFullArticle`}
        defaultMessage={`Read the full article`}
      /><i className="fa fa-angle-right" aria-hidden="true" />
    </Link>
    <div className="text">
      <FormattedMessage 
        id={`home.carousel.JonathanKeane`}
        defaultMessage={`Jonathan Keane,`}
      /> <b>
        <FormattedMessage 
          id={`home.carousel.TechEU`}
          defaultMessage={`Tech. EU`}
        />
      </b>
    </div>
  </div>
)

export default class HomeCarousel extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.test = this.test.bind(this)
  }

  next() {
    this.slider.slickNext()
  }

  previous() {
    this.slider.slickPrev()
  }

  test(first, second) {
    if (first < second) {
      this.next()
    } else if (first > second) {
      this.previous()
    }
  }

  render() {
    const settings = {
      customPaging(i) {
        const images = [emerce, echo, techeu, detijd, datanews];
        return <a><img src={images[i++]} alt="test" /></a>;
      },
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      nextArrow: <NextArrow next={this.next} />,
      prevArrow: <PrevArrow previous={this.previous} />,
      beforeChange: this.test
    };
    const settings2 = {
      centerMode: true,
      swipe: false,
      swipeToSlide: false,
      centerMode: true,
      arrows: false,
      infinite: false,
      initialSlide: 2,
      responsive: [{
        breakpoint: 768, settings: { slidesToShow: 1 }
      }, {
        breakpoint: 10000, settings: { slidesToShow: 5 }
      }],
      beforeChange: this.test2
    };
    return (
      <section id="home-carousel">
        <Slider {...settings}>
          <div><CarouselItem /></div>
          <div><CarouselItem /></div>
          <div><CarouselItem /></div>
          <div><CarouselItem /></div>
          <div><CarouselItem /></div>
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

import React from 'react';
import Slider from 'react-slick';

import './HomeCarousel.scss';
import emerce from '../../images/HomePage/Carousel/emerce.png';
import echo from '../../images/HomePage/Carousel/echo.png';
import techeu from '../../images/HomePage/Carousel/tech-eu.png';
import detijd from '../../images/HomePage/Carousel/de-tijd.png';
import datanews from '../../images/HomePage/Carousel/datanews.png';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    ></div>
  );
};

export default () => {
  const settings = {
    customPaging(i) {
      const images = [emerce, echo, techeu, detijd, datanews];
      return <a><img src={images[i++]} alt="test" /></a>;
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <section id="home-carousel">
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div>
          <h1>
            The whole world is talking about Qover
          </h1>
          <div>
            « Belgian financial technology startup Qover has raised €5.5 million in a Series A round ledby Anthemis. »
          </div>
          <div>
            Read the full article
          </div>
          <div>
            Jonathan Keane, Tech. EU
          </div>
        </div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
      </Slider>
    </section>
  );
};

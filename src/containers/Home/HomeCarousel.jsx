import React from 'react';
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
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ><i className="fa fa-angle-right" aria-hidden="true"></i></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ><i className="fa fa-angle-left" aria-hidden="true"></i></div>
  );
};

const CarouselItem = (props) => (
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
    <Link to="#" className="read-article">
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
        <div><CarouselItem /></div>
        <div><CarouselItem /></div>
        <div><CarouselItem /></div>
        <div><CarouselItem /></div>
        <div><CarouselItem /></div>
      </Slider>
    </section>
  );
};

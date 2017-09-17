import React, { Component } from 'react';
import throttle from 'lodash.throttle';

export default class ParallaxComponent extends Component {

  static defaultProps = {
    width: 'auto',
    height: 'auto',
    top: 'inherit',
    left: 'inherit',
    right: 'inherit',
    speed: -0.03,
    transform: 'none',
  }

  constructor(props) {
    super(props);

    this.handleScroll = throttle(this.handleScroll.bind(this), 10);
    // eslint-disable-next-line
    this.parallaxElement;
  }

  componentDidMount() {
    this.props.scrollContainer.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    this.props.scrollContainer.removeEventListener('scroll', this.handleScroll);
  }

  getTop() {
    let top = 0;
    // this.props.top ? top = this.props.top : top = 10; 
    const topString = top + '';

    return topString.indexOf('%') > -1
      ? this.props.scrollContainer.innerHeight * (topString.replace('%', '') / 100)
      : parseInt(top, 10);
  }

  handleScroll() {
    const { speed } = this.props;

    const top = this.getTop();

    // Top positons
    const pageTop = this.props.scrollContainer.pageYOffset;
    const newTop = (top - (pageTop * speed));

    // Set new top position
    this.parallaxElement.style.transform = `translateY(${newTop}px)`;
  }

  render() {
    const { width, height, left, right, speed, style, children, className } = this.props;
    const ownStyle = { width, height, left, right };
    return (
      <div
        className={`${className}`}
        ref={ref => this.parallaxElement = ref}
        style={{ ...style, ...ownStyle }}
        speed={speed || 0}
      >
        {children}
      </div>
    );
  }
}

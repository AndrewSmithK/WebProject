
import React from 'react';
import IconPlay from '../../images/OurProducts/GapInsurance/icon-play.svg';
import IconPlaySmall from '../../images/OurProducts/GapInsurance/icon-play-small.svg';

export default class GapVideo extends React.Component {
  render() {
    return <section className="section" id="gap-video">
      <h2 className="title">
        Understand the GAP  insurance in one minute
      </h2>
      <div className="icon-play hide">
        <img src={IconPlay} alt="icon-play"/>
      </div>
      <div className="icon-play d-none display">
        <img src={IconPlaySmall} alt="icon-play"/>
      </div>
    </section>;
  }
}

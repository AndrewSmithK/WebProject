
import React from 'react';
import IconPlay from '../../images/gap-insurance/icon-play.svg';

export default class GapVideo extends React.Component {
  render() {
    return <section className="section" id="gap-video">
      <h2 className="title">
        Understand the GAP  insurance in one minute
      </h2>
      <div className="icon-play">
        <img src={IconPlay} alt="icon-play"/>
      </div>
    </section>;
  }
}

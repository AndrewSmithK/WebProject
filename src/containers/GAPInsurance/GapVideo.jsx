import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import Vimeo from 'react-vimeo';

import IconPlay from '../../images/OurProducts/GapInsurance/icon-play.svg';
import IconPlaySmall from '../../images/OurProducts/GapInsurance/icon-play-small.svg';

export default class GapVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false
    }
  }

  playVimeo() {
    this.setState({
      play: true
    })
  }

  render() {
    return <section className="section" id="gap-video">
      {
        this.state.play 
          ? <div className="vimeo-box"><iframe src="https://player.vimeo.com/video/4435893?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
          : <div className="front">
              <h2 className="title">
              <FormattedMessage 
                id={`gap.video.title`}
                defaultMessage={`Understand the GAP insurance in one minute`}
              />
              </h2>
              <div className="icon-play hide" onClick={this.playVimeo.bind(this)}>
                <img src={IconPlay} alt="icon-play" />
              </div>
              <div className="icon-play d-none display" onClick={this.playVimeo.bind(this)}>
                <img src={IconPlaySmall} alt="icon-play"/>
              </div>
            </div>
      }
    </section>;
  }
}

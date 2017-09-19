import React from 'react';
import FormattedMessage from '../../components/phrase';

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
          ? <div className="vimeo-box"><iframe title="GAP Insurance" src="https://www.youtube.com/embed/9mTyoXK58vQ?rel=0&autoplay=1" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
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

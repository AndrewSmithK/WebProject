import React from 'react';
import IconCheckbox from '../../images/OurProducts/GapInsurance/icon-checkbox.svg';
import IconClips from '../../images/OurProducts/GapInsurance/clips.svg';

export default class GapFactSheet extends React.Component {
  render() {
    return <section className="section" id="gap-fact-sheet">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-11">
                <div className="item">
                  <h2 className="main-title text-left">
                    Fact Sheet
                  </h2>
                  <h5 className="title text-turquoise">
                    Why GAP could be a game changer for me?
                  </h5>
                  <p className="text">
                    By combining our GAP insurance with a traditional
                    light or full casco (immediate depreciation), your
                    customer can save up to 25% on his premium.
                  </p>
                  <div className="subtitle">
                    For you, it means a higher conversion and retention
                    rate!
                  </div>
                </div>
              </div>
              <div className="col-md-11">
                <div className="item">
                  <h5 className="title text-turquoise">
                    For which customers?
                  </h5>
                  <p className="text">
                    Ideal for customers who bought a new or a recent
                    used car and are seeking for a maximum protection.
                  </p>
                </div>
              </div>
              <div className="col-md-11">
                <div className="item">
                  <h5 className="title text-turquoise">
                    Be unique on the market
                  </h5>
                  <p className="text">
                    Be one of the few that offer a 100% protection for up
                    to 5 years. Our digital first approach would enable you
                    to better engage with your customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="sheet">
                <div className="clips">
                  <img src={IconClips} alt="clips"/>
                </div>
                <div className="content-container bg-white">
                  <div className="content bg-pale-grey-two">
                    <h4 className="title text-blue">
                      How can Qover offer such
                      competitive premiums for
                      GAP Insurance?
                    </h4>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="icon">
                            <img src={IconCheckbox} alt="icon-checbox"/>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <p className="text text-grey">
                            Traditional insurers are wrong by adding
                            a 100% protection embedded in the
                            casco: The risk profile of a total loss
                            deserves a dedicated approach.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="icon">
                            <img src={IconCheckbox} alt="icon-checbox"/>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <p className="text text-grey">
                            Qover has rebuilt a fully digital
                            ecosystem: our expense ratio is reduced
                            to 5% while the market average stays
                            around 25%.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="icon">
                            <img src={IconCheckbox} alt="icon-checbox"/>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <p className="text text-grey">
                            The GAP Insurance is a Branch 16
                            product, meaning that the insurance tax
                            is about 16.75 % instead of the 27.10 %
                            applied to casco.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="icon">
                            <img src={IconCheckbox} alt="icon-checbox"/>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <p className="text text-grey" id="last-block">
                            Qover uses state of the art machine
                            learning techniques for pricing. <b> A more
                            sophisticated approach for a better
                            pricing! </b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

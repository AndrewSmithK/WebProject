import React from 'react';
import FormattedMessage from '../../components/phrase';

import Api from '../../images/HomePage/RobustApi/api-image.jpg';
import IconDevBig from '../../images/HomePage/RobustApi/icon-dev-big.svg';
import Blue from '../../images/HomePage/RobustApi/blue.svg';

export default class RobustApi extends React.Component {
  render() {
    return <section className="section" id="robust-api">
      <div className="icon text-center">
        <img src={IconDevBig} alt="Qover - icon-dev-big"/>
      </div>
      <h2 className="title text-grey hide">
        <FormattedMessage 
          id={`home.robustApi.title.part1`}
          defaultMessage={`Easy to use and robust API that makes`}
        /><br/>
        <FormattedMessage 
          id={`home.robustApi.title.part1`}
          defaultMessage={`insurance distribution effortless`}
        />
      </h2>
        <h2 className="title text-grey d-none display">
            <FormattedMessage
                id={`home.robustApi.title.part1`}
                defaultMessage={`Easy to use and robust API that transforms insurance into a piece of cake`}
            />
        </h2>
      <div className="gap-image">
        <img src={Api} className="img-fluid" alt="Qover - api" />
      </div>
      <div className="text-blocks container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="item">
              <h5 className="title text-grey">
                <FormattedMessage 
                  id={`home.robustApi.item1.title`}
                  defaultMessage={`Developers first`}
                />
              </h5>
              <p className="text text-grey">
                <FormattedMessage 
                  id={`home.robustApi.item1.text`}
                  defaultMessage={`We continously seek out elegant solutions that enable robust, scalable and flexible integrations. We manage the complexity on our side so that you can get up and running with Qover in few minutes.`}
                />
              </p>
              <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.qover.me/docs/">
                <FormattedMessage 
                  id={`home.robustApi.link`}
                  defaultMessage={`See the API documentation`}
                /><i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="item">
              <h5 className="title text-grey">
                <FormattedMessage 
                  id={`home.robustApi.item2.title`}
                  defaultMessage={`Always improving`}
                />
              </h5>
              <p className="text text-grey">
                <FormattedMessage 
                  id={`home.robustApi.item2.text`}
                  defaultMessage={`Our world-class ninjas are constantly improving any fact of the Qover Stack. We develop new features, new products and new countries every months. We love it: #Hacking-Insurance.`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="half-circle bg-white">
        <div className="icon">
          <img src={Blue} alt="Qover - blue"/>
        </div>
      </div>
    </section>;
  }
}

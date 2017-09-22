import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import dashboard from '../../images/HomePage/GetStarted/img-dashboard.png';
// import api_image from '../../images/HomePage/api_image.png';

export default class GetStarted extends React.Component {
  render() {
    return (<section className="section text-white" id="get-started">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 pr-4">
            <h2 className="secture-title text-left">
              <FormattedMessage 
                id={`home.start.title`}
                defaultMessage={`Get Started in 1 Minute`}
              />
            </h2>
            <ul className="start-list">
              <li>
                <div className="item">
                  <h5 className="title">
                    <FormattedMessage 
                      id={`home.start.item1.title`}
                      defaultMessage={`Select your product`}
                    />
                  </h5>
                  <p className="text text-left text-white">
                    <b>
                      <FormattedMessage 
                        id={`home.start.item1.bold`}
                        defaultMessage={`Discover our library of insurance products. `}
                      />
                    </b> 
                    <FormattedMessage 
                      id={`home.start.item1.text`}
                      defaultMessage={`Keep posted with the
                      latest news. We are developing a lot of them for several countries.`}
                    />
                  </p>
                  <span className="circle">1</span>
                  <div className="line" />
                </div>
              </li>
              <li>
                <div className="item">
                  <h5 className="title">
                    <FormattedMessage 
                      id={`home.start.item2.title`}
                      defaultMessage={`Sign a B2B Agreement and get your token`}
                    />
                  </h5>
                  <p className="text text-left text-white">
                    <FormattedMessage 
                      id={`home.start.item2.text1`}
                      defaultMessage={`Before signing, you can of course play around with our`}
                    /><b id="api"> API</b>. <FormattedMessage
                      id={`home.start.item2.text1`}
                      defaultMessage={`Once you get a token, you can start selling immediately !`}
                    />
                  </p>
                  <span className="circle">2</span>
                  <div className="line" />
                </div>
              </li>
              <li>
                <div className="item">
                  <h5 className="title">
                    <FormattedMessage 
                      id={`home.start.item3.title`}
                      defaultMessage={`Choose a distribution model`}
                    />
                  </h5>
                  <p className="text text-left text-white">
                    <FormattedMessage 
                      id={`home.start.item3.text`}
                      defaultMessage={`You are a techy? Consider the full integration of our solution in your
                      system. Not familiar with technology? Don't worry, using our digital
                      leads or referral distribution model is an easy game.`}
                    />
                  </p>
                  <span className="circle">3</span>
                  <div className="line" />
                </div>
              </li>
              <li>
                <div className="item">
                  <h5 className="title">
                    <FormattedMessage 
                      id={`home.start.item4.title`}
                      defaultMessage={`Enjoy being part of the future!`}
                    />
                  </h5>
                  <span className="circle">4</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <div className="shadow-image">
              <img src={dashboard} alt="dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

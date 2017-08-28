import React from 'react';
import dashboard from '../../images/img-dashboard.png';
// import Charts from '../../images/charts.png';

export default class GetStarted extends React.Component {
  render() {
    return (<section className="section text-white" id="get-started">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pr-4">
            <h2 className="secture-title text-left">
              Get Started in 1 Minute
            </h2>
            <ul className="start-list">
              <li>
                <div className="item">
                  <h5 className="title">Select your product</h5>
                  <p className="text text-left text-white">
                    <b>Discover our library of insurance products.</b> Keep posted with the
                    latest news. We are developing a lot of them for several countries.
                  </p>
                  <span className="circle">1</span>
                  <div className="line" />
                </div>
              </li>
              <li>
                <div className="item">
                  <h5 className="title">Sign a B2B Agreement and get your token</h5>
                  <p className="text text-left text-white">
                    Before signing, you can of course play around with our <b>API</b>. Once you
                    get a token, you can start selling immediately !
                  </p>
                  <span className="circle">2</span>
                  <div className="line" />
                </div>
              </li>
              <li>
                <div className="item">
                  <h5 className="title">Choose a distribution model</h5>
                  <p className="text text-left text-white">
                    You are a techy? Consider the full integration of our solution in your
                    system. Not familiar with technology? Don't worry, using our digital
                    leads or referral distribution model is an easy game.
                  </p>
                  <span className="circle">3</span>
                  <div className="line" />
                </div>
              </li>
              <li>
                <div className="item">
                  <h5 className="title">Enjoy being part of the future!</h5>
                  <span className="circle">4</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="shadow-image">
              {/*<div style={{ width: `${510}px`, height: `${485}px`, background: '#f00' }} />*/}
              <img src={dashboard} alt="dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

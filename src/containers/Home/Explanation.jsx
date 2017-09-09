import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import IconReferral from '../../images/HomePage/Explanation/icon-referral.svg';
import IconLead from '../../images/HomePage/Explanation/icon-lead.svg';
import IconVertical from '../../images/HomePage/Explanation/icon-vertical.svg';
import IconLaunch from '../../images/HomePage/Explanation/icon-launch.svg';

export default class Explanation extends React.Component {
  render() {
    return <section className="section bg-pale-grey-two" id="explanation">
      <h1 className="title text-blue">
        <FormattedMessage 
          id={`home.explanation.title`}
          defaultMessage={`How does it work?`}
        />
      </h1>
      <h3 className="subtitle text-blue">
        <FormattedMessage 
          id={`home.explanation.subtitle`}
          defaultMessage={`Choose one of the three options!`}
        />
      </h3>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-12">
            <div className="item bg-white">
              <div className="icon">
                <img src={IconReferral} alt="icon-referral" />
              </div>
              <h5 className="title text-blue">
                <FormattedMessage 
                  id={`home.explanation.item1.title`}
                  defaultMessage={`Referral`}
                />
              </h5>
              <p className="text text-grey">
                <b>
                  <FormattedMessage 
                    id={`home.explanation.item1.subtitle`}
                    defaultMessage={`You want to keep it simple ?`}
                  />
                </b>
                <br/><br/>
                  <FormattedMessage 
                    id={`home.explanation.item1.text`}
                    defaultMessage={`No worries! Make the purchase yourself and
                    print the contract. An easy way to offer our
                    products to your customers.`}
                  />
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="item bg-white">
              <div className="icon">
                <img src={IconLead} alt="icon-lead"/>
              </div>
              <h5 className="title text-blue">
                <FormattedMessage 
                  id={`home.explanation.item2.title`}
                  defaultMessage={`Digital Lead`}
                />
              </h5>
              <p className="text text-grey">
                <b>
                  <FormattedMessage 
                    id={`home.explanation.item2.subtitle`}
                    defaultMessage={`Send a link to your customer via email, with
                    your own branding or Qover's (your choice).`}
                  />
                </b>
                <br/><br/>
                <FormattedMessage 
                  id={`home.explanation.item2.text`}
                  defaultMessage={`You can preselect your customer options
                  and he can purchase the coverage he wants
                  in real time.`}
                />
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="item bg-white">
              <div className="icon">
                <img src={IconVertical} alt="icon-vertical"/>
              </div>
              <h5 className="title text-blue">
                <FormattedMessage 
                  id={`home.explanation.item3.title`}
                  defaultMessage={`Vertical Integration`}
                />
              </h5>
              <p className="text text-grey">
                <b>
                  <FormattedMessage 
                    id={`home.explanation.item3.subtitle`}
                    defaultMessage={`It only takes few lines of code to add our
                    digital module within your website or App.`}
                  />
                </b>
                <br/><br/>
                <FormattedMessage 
                  id={`home.explanation.item3.text`}
                  defaultMessage={`No IT resources in-house? Our developers
                  can make the integration for you!`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="label bg-turquoise">
        <div className="icon">
          <img src={IconLaunch} alt="qover - launch"/>
        </div>
        <div className="text">
          <h5 className="title">
            <FormattedMessage 
              id={`home.explanation.label.title`}
              defaultMessage={`Even more if you are an intermediary`}
            />
          </h5>
          <p>
            <b>
              <FormattedMessage 
                id={`home.explanation.label.subtitle`}
                defaultMessage={`An Amendment or a cancellation ?`}
              />
            </b> <br/>
            <FormattedMessage 
              id={`home.explanation.label.text`}
              defaultMessage={`It is digital, plug & play and real-time for you and for your customer`}
            />
          </p>
        </div>
      </div>
    </section>;
  }
}


import React from 'react';
import IconPlay from '../../images/gap-insurance/icon-play.png';

export default class GapCase extends React.Component {
  render() {
    return <section className="section" id="gap-case">
      <h3 className="title text-blue text-center">
        What to do in case of a claim ?
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="contacts">
              <h4 className="title">
                If there is an event that could result in a total loss claim, your customer must contact us as soon as possible.
              </h4>
              <h4 className="title">
                <b>
                  Qover mainly uses digital medium of communication.
                </b>                        
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text">
              All claims must be notified as soon as reasonably possible, and in any event within 30 days of a total loss.
            </p>
          </div>
        </div>
      </div>
    </section>;
  }
}

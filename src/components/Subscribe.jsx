import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

export default class Subscribe extends React.Component {
  render() {
    return <section className="section bg-light-grey" id="subscribe">
      <div className="text-center">
        <h4 className="title text-grey">
          <FormattedMessage 
            id={`subscribe.title`}
            defaultMessage={`Keep up with the latest features`}
          />
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <form>
            <input type="email" placeholder="please@qover.me" />
            <button type="submit" className="btn bg-turquoise text-white">
              <FormattedMessage 
                id={`subscribe.btnSubscribe`}
                defaultMessage={`Subscribe`}
              />
            </button>
          </form>
        </div>
      </div>
    </section>;
  }
}

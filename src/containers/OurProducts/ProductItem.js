import React from 'react'
import { FormattedMessage } from 'react-intl-phraseapp'

export default (props) => (
    <div className="col-sm-4 col-6">
      <div className="item text-center bg-white">
        <div className="icon">
          <img src={props.image} alt="accident-health" />
        </div>
        <div className="text-container">
          <h5 className="title">
            <FormattedMessage
              id={`products.traditional.${props.num}.title`}
              defaultMessage={props.title}
            />
          </h5>
          <p className="text">
            <FormattedMessage
              id={`products.traditional.${props.num}.text`}
              defaultMessage={props.text}
            />
          </p>
        </div>
        {props.status === 'soon' ?
          <button className="btn btn-disabled">
            <FormattedMessage
              id={`products.traditional.ComingSoon`}
              defaultMessage={`Coming soon`}
            />
          </button> :
          <button className="btn">
            <FormattedMessage
              id={`products.traditional.ComingSoon`}
              defaultMessage={`More info`}
            />
          </button>
        }
      </div>
    </div>
)

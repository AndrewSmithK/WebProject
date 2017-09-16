import React from 'react'
import { FormattedMessage } from 'react-intl-phraseapp'

export default (props) => (
    <div className="item-box">
      <div className={`item text-center bg-white ${props.status}`}>
        <div className="trapezoid"></div>      
        <div className="icon-box">
          <div className="icon">
            <img src={props.image} alt="accident-health" />
          </div>
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
        <button className="btn">
          <FormattedMessage
            id={`products.traditional.ComingSoon`}
            defaultMessage={`More info`}
          />
        </button>
      </div>
    </div>
)

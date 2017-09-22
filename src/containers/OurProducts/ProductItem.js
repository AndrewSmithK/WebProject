import React from 'react'
import { FormattedMessage } from 'react-intl-phraseapp'
import { Link } from 'react-router-dom'

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
      {
        props.status === 'soon' ?
          <button className="btn">
            <FormattedMessage
              id={`products.traditional.comingSoon`}
              defaultMessage='More info'
            />
          </button> :
          <Link to={props.url} className="btn">
            <FormattedMessage
              id={`products.traditional.moreІnfo`}
              defaultMessage='More info'
            />
          </Link>
      }
    </div>
  </div>
)

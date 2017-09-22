import React from 'react'
import { Link } from 'react-router-dom';

import './ThankYouScreen.scss'
import image from './image.svg'

export default (props) =>
    <div className="thank-you-screen">
        <h1 className="title">Thank you for your interest!</h1>

        <img className="image" src={image} alt="thank you"/>

        <div className="message">
            <p>
                {props.boldText || ''}
                <br />
                <span>{props.regularText || ''}</span>
            </p>
        </div>

        <Link to="/" className="btn">Back to the homepage</Link>
    </div>

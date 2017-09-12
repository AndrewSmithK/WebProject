import React from 'react'
import { Link } from 'react-router-dom';

import './ThankYouScreen.scss'
import image from './image.svg'

export default () =>
    <div className="thank-you-screen">
        <h1 className="title">Thank you for your interest!</h1>

        <div className="image">
            <img src={image} alt="thank you"/>
        </div>

        <div className="message">
            <p>
                Your registration request was well executed.
                <br />
                <span>We will come back to you soon.</span>
            </p>
        </div>

        <Link to="/" className="btn">Back to the homepage</Link>
    </div>

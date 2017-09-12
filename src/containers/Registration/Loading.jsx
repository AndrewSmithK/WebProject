import React from 'react'

import Spinner from './spinner.png'
import './Loading.scss'

export default () =>
    <div className="loading">
        <div className="spinner">
            <img className="spinner__image" src={Spinner} alt="Spinner"/>
        </div>
        <p className="message">
            Datas are loading
        </p>
    </div>

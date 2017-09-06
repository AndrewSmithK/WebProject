import React from 'react'

export default (props) => (
    <div className="col-lg-3 col-md-6">
        <div className="item text-center bg-white">
            <div className="icon">
                <img src={props.image} alt="accident-health" />
            </div>
            <div className="text-container">
                <h5 className="title">{props.title}</h5>
                <p className="text">
                    {props.text}
                </p>
            </div>
            {props.staus === 'soon' ?
                <button className="btn btn-disabled">Coming soon</button> :
                <button className="btn">More info</button>
            }
        </div>
    </div>
)
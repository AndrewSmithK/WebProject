import React from 'react';

export default class Hiring extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }
    render() {
        return (
            <div className="container-fluid hiringline" style={{ backgroundColor: 'transperent' }}>
                <div className="container hiring pr-0 pl-0">
                            <a className="btn consumersweb">CONSUMERS WEBSITE</a>
                            <span className="btndivider">&nbsp;|</span>
                            <a className="btn complaints">COMPLAINTS</a> 
                            <a className="wehire btn">WE ARE HIRING</a>

                </div>
            </div>);
    }
}
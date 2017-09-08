import React from 'react';

export default class Hiring extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }
    render() {
        return (
            <div className="container-fluid hiringline">
                <div className="container hiring pr-0 pl-0">
                            <a href="/" className="btn consumersweb">CONSUMERS WEBSITE</a>
                            <span className="btndivider">&nbsp;|</span>
                            <a href="/" className="btn complaints">COMPLAINTS</a> 
                            <a href="/" className="wehire btn">WE ARE HIRING</a>

                </div>
            </div>);
    }
}
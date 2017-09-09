import React from 'react';
import { Link } from 'react-router-dom';

export default class Hiring extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }
    render() {
        return (
            <div className="container-fluid hiringline">
                <div className="container hiring p-0">
                    <Link to="/" className="link">Consumer website</Link>
                    <span className="separator">|</span>
                    <Link to="/" className="link">Complaints</Link> 
                    <Link to="/" className="btn btn-hiring">We are hiring</Link>
                </div>
            </div>);
    }
}
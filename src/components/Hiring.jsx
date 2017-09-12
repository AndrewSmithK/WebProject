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
            <div className={`container-fluid hiringline ${this.props.special ? 'special' : null}`}>
              {console.log(this.props)}
              <div className="container hiring p-0">
                <a href="https://qover.be/" target="_blank" className="link">Consumer website</a>
                <span className="separator">|</span>
                <Link to="/terms-policies/complaints" className="link">Complaints</Link>
                    <Link to="/" className="btn btn-hiring">We are hiring</Link>
                </div>
            </div>);
    }
}

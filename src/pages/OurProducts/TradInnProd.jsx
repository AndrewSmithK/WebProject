/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import AccidentHealth from '../../images/our-products/accident-health.png';
import Travel from '../../images/our-products/travel.png';
import JobLoss from '../../images/our-products/job-loss.png';
import Landlord from '../../images/our-products/landlord.png';

export default class TradInnProd extends React.Component {
  render() {
    return <section className="section" id="trad-inn-prod">
        <h2 className="title text-grey">
            Traditional & innovative products
        </h2>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="item text-center bg-white">
                        <div className="icon">
                            <img src={AccidentHealth} alt="accident-health"/>
                        </div>
                        <div className="text-container">
                            <h5 className="title">Accident & Health</h5>
                            <p className="text">
                                Protect you from the financial loss from an accident,
                                whether it occurs at home or at work.
                            </p>
                        </div>
                        <button className="btn btn-disabled">Coming soon</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="item text-center bg-white">
                        <div className="icon">
                            <img src={Travel} alt="travel"/>
                        </div>
                        <div className="text-container">
                            <h5 className="title">Travel</h5>
                            <p className="text">
                                Protect you from the financial loss from an accident,
                                whether it occurs at home or at work.
                            </p>
                        </div>
                        <button className="btn btn-disabled">Coming soon</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="item text-center bg-white">
                        <div className="icon" >
                            <img src={JobLoss} alt="job-loss"/>
                        </div>
                        <div className="text-container">
                            <h5 className="title">Job Loss</h5>
                            <p className="text">
                                Protect you from the financial loss from an accident,
                                whether it occurs at home or at work.
                            </p>
                        </div>
                        <button className="btn btn-disabled">Coming soon</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="item text-center bg-white">
                        <div className="icon last-icon" >
                            <img src={Landlord} alt="landlord"/>
                        </div>
                        <div className="text-container">
                            <h5 className="title">Landlord Insurance</h5>
                            <p className="text">
                                Protect you from the financial loss from an accident,
                                whether it occurs at home or at work.
                            </p>
                        </div>
                        <button className="btn btn-disabled">Coming soon</button>
                    </div>
                </div>
            </div>
        </div>
    </section>;
  }
}

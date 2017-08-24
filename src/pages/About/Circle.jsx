import React from 'react';
import QoverWheel from '../../images/qover-wheel.png';

export default class Circle extends React.Component {
  render() {
    return <section className="section bg-pale-grey-two" id="circle">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 side-bar">
                    <div className="left-side-bar item text-right bd-right">
                        <h3 className="title text-blue">SLICED</h3>
                        <p className="text text-grey" >
                            Personalized<br/>
                            pick & choose insurance products.
                            Full range of non-life insurance products
                        </p>
                    </div>
                    <div className="item left-side-bar text-right bd-right" id="left-bar">
                        <h3 className="title text-blue">ON-DEMAND</h3>
                        <p className="text text-grey">
                            Coverage from<br/>
                            1 day up to 5 years.
                            Cancel anytime
                        </p>
                    </div>
                </div>
                <div className="icon col-md-5">
                    <img src={QoverWheel} alt="qover-wheel"/>
                </div>
                <div className="col-md-3 side-bar">
                  <div className="item right-side-bar bd-left">
                        <h3 className="title text-blue">DIGITAL</h3>
                        <p className="text text-grey">
                            Systems & processes
                            digitally reinvented
                        </p>
                    </div>

                    <div className="item right-side-bar bd-left">
                        <h3 className="title text-blue">INSURANCE</h3>
                        <p className="text text-grey">
                            Full- Fledged insurance
                            solutions
                        </p>
                    </div>

                    <div className="item right-side-bar  bd-left">
                        <h3 className="title text-blue">INFRASTRUCTURE</h3>
                        <p className="text text-grey">
                            Easy-to-use and robust
                            APIs for seamless
                            integration
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
  }
}

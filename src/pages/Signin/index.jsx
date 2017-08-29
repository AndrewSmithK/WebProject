import React, { Component } from 'react';
import Field from '../../components/small/Field';
import { MuiThemeProvider } from 'material-ui/styles';

import Checkbox from '../../images/checkbox.png';
import './styles.scss';

export default class Signin extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="signin-page">
          <div className="page-head">
            <div className="container">
              <p>&#60; QOVER.ME</p>
            </div>
          </div>
          <div className="content-box">
            <div className="box-wrap">
              <div className="logo">
                logo
              </div>
              <div className="email-form">
                <div className="title">Welcome at Qover</div>
                <form className="form">
                    <Field
                      width="full"
                      hintText="Type your email"
                      floatingLabelText="Email"
                    />
                    <Field
                      width="full"
                      hintText="********"
                      floatingLabelText="Password"
                    />

                    <div className="clearfix"></div>

                    <div className="row">
                      <div className="col-sm-6 remember">
                        <img src={Checkbox} /> Remember me
                      </div>

                      <div className="col-sm-6 text-right">
                        Forgot your password?
                      </div>
                    </div>

                    <button className="btn btn-block" type="submit">Sign in to your account</button>
                  </form>
              </div>
              <div className="ask">
               <button className="btn btn-block" type="submit">Don't have an account? <span>Ask access</span></button>
              </div>
            </div>
          </div>
          <div className="footer">
            <p className="coptrights">&copy; Qover 2017</p>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

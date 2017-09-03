import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

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
                <div></div>
              </div>
              {this.props.children}
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

import React from 'react';

import { MuiThemeProvider } from 'material-ui/styles';

import TopLine from '../components/TopLine';
import Footer from '../components/Footer';

import '../styles/main.scss';

import ScrollToTop from '../ScrollTo';

export default class Default extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <ScrollToTop>
        <div className="app">

          <TopLine />
          <div className="content">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </MuiThemeProvider>);
  }
}

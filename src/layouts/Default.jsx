import React from 'react';

import { MuiThemeProvider } from 'material-ui/styles';

import TopLine from '../components/TopLine';
import Footer from '../components/Footer';

import '../styles/main.scss';

export default class Default extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div className="app">
        <TopLine path={this.props.children.props.location.pathname} />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>);
  }
}

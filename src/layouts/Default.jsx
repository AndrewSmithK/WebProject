import React from 'react';

import { MuiThemeProvider } from 'material-ui/styles';

import TopLine from '../components/TopLine';
import Footer from '../components/Footer';

import '../styles/main.scss';

export default class Default extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div className="app">
<<<<<<< HEAD
        <TopLine path={this.props} />
=======
        <TopLine path={this.props.children.props.location.pathname} />
>>>>>>> df49b42897098422e805a0da20207abbabd30d19
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>);
  }
}

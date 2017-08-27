import React from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TopLine from '../components/TopLine';
import Footer from '../components/Footer';

import '../styles/main.scss';

injectTapEventPlugin();

export default class Default extends React.Component {
  render() {
    return (<MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="app">
        <TopLine />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>);
  }
}

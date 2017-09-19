import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import { initializePhraseAppEditor } from 'react-intl-phraseapp';
// import initializePhraseAppEnabled from './scripts/phraceappEnable';
// import { initConf } from '../config/phraseapp';

import $ from 'jquery'
import Popper from 'popper.js'

import configureStore from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

// injectTapEventPlugin()
// initializePhraseAppEnabled();
// initializePhraseAppEditor({
//   projectId: '2a6ee73abebe1c645eca1468265100eb',
//   phraseEnabled: localStorage.phraseEnabled === 'true',
//   prefix: '[[__',
//   suffix: '__]]'
// });

window.jQuery = $
window.Popper = Popper
require('bootstrap')

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
, document.getElementById('root')
)
registerServiceWorker()

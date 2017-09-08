import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IntlProvider } from 'react-intl';
import { initializePhraseAppEditor } from 'react-intl-phraseapp';
import { ParallaxController } from 'react-scroll-parallax';
// import { initConf } from '../config/phraseapp'

import $ from 'jquery'
import Popper from 'popper.js'

import configureStore from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import initializePhraseAppEnabled from './scripts/phraceappEnable'

ParallaxController.init();
injectTapEventPlugin()
initializePhraseAppEnabled()
initializePhraseAppEditor({
  projectId: 'a3a97416736eb85bea5e555988548a56',
  phraseEnabled: localStorage.phraseEnabled === 'true',
  prefix: '[[__',
  suffix: '__]]'
});

window.jQuery = $
window.Popper = Popper
require('bootstrap')

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
      <MuiThemeProvider>
        <IntlProvider locale="en">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IntlProvider>
      </MuiThemeProvider>
  </Provider>
, document.getElementById('root')
)
registerServiceWorker()

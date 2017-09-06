import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {IntlProvider} from 'react-intl';
import {initializePhraseAppEditor} from 'react-intl-phraseapp';

import configureStore from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import initializePhraseAppEnabled from './scripts/phraceappEnable'

injectTapEventPlugin()
initializePhraseAppEnabled()

initializePhraseAppEditor({
  projectId: '3bd1ef73d577719aafd5e8cbf85687fc',
  phraseEnabled: localStorage.phraseEnabled === 'true',
  prefix: '[[__',
  suffix: '__]]'
});

const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <MuiThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>
, document.getElementById('root')
)
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import configureStore from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

injectTapEventPlugin()

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
, document.getElementById('root')
)
registerServiceWorker()

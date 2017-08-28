import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore } from './redux/createStore';
import getRoutes from './routes';

const dest = global.document.getElementById('root');
const store = createStore(createHistory(), global.__data);
const history = syncHistoryWithStore(createHistory(), store);

const component = (
  <BrowserRouter history={history}>
    {getRoutes(store)}
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  global.React = React; // enable debugger
  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

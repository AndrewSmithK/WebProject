import express from 'express';
import http from 'http';
import httpProxy from 'http-proxy';
import path from 'path';
import PrettyError from 'pretty-error';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {
  createStore,
} from '../src/redux/createStore';
import getRoutes from '../src/routes';
import Template from '../src/template';
import { port, apiHost, apiPort } from '../config/env';

const targetUrl = `http://${apiHost}:${apiPort}`;
const pretty = new PrettyError();
const app = express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true,
});

global.__CLIENT__ = false;

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use('/api', (req, res) => {
  proxy.web(req, res, { target: `${targetUrl}/api` });
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

proxy.on('error', (error, req, res) => {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }

  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  const json = { error: 'proxy_error', reason: error.message };

  res.end(JSON.stringify(json));
});

app.use((req, res) => {
  if (process.env.NODE_ENV === 'development') {
    webpackIsomorphicTools.refresh();
  }

  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(memoryHistory);

  function hydrateOnClient() {
    res.send(`<!doctype html>${ReactDOM.renderToString(<Template assets={webpackIsomorphicTools.assets()} store={store} />)}`);
  }

  const context = {};
  const component = (
    <Provider store={store} key="provider">
      <StaticRouter location={req.originalUrl} context={context}>
        {getRoutes(store)}
      </StaticRouter>
    </Provider>);

  if (context.status === 404) {
    res.status(404);
  } else if (context.status === 302) {
    res.redirect(302, context.url);
  } else {
    res.status(200);
    global.navigator = { userAgent: req.headers['user-agent'] };
    res.send(`<!doctype html>${ReactDOM.renderToStaticMarkup(<Template assets={webpackIsomorphicTools.assets()} component={component} store={store} />)}`);
  }

  // match({ history, routes: getRoutes(store), location: req.originalUrl },
  // (error, redirectLocation, renderProps) => {
  //   if (redirectLocation) {
  //     res.redirect(redirectLocation.pathname + redirectLocation.search);
  //   } else if (error) {
  //     console.error('ROUTER ERROR:', pretty.render(error));
  //     res.status(500);
  //     hydrateOnClient();
  //   } else if (renderProps) {
  //     const component = (
  //       <Provider store={store} key="provider">
  //         <RouterContext {...renderProps} />
  //       </Provider>
  //     );

  //     res.status(200);

  //     global.navigator = { userAgent: req.headers['user-agent'] };

  //     res.send(`<!doctype html>${ReactDOM.renderToStaticMarkup(<Template assets={webpackIsomorphicTools.assets()} component={component} store={store} />)}`);
  //   } else {
  //     res.status(404).send('Not found');
  //   }
  // });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server listening on port ${port}!`);
  }
});

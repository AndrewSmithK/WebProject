import React from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import { webpackHost, webpackPort } from '../config/env';

export default class Template extends React.Component {
  render() {
    const { assets, component, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Qover</title>
          {/* production */}
          {Object.keys(assets.styles).map((style, key) => {
            return (<link
              href={assets.styles[style]}
              key={key} media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />);
          }
          )}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }}
            charSet="UTF-8"
          />
          <script
            src={                  
              process.env.NODE_ENV === 'development' ?
              `http://${webpackHost}:${webpackPort}/assets/main.js` :
              '/assets/main.js'
            }
            charSet="UTF-8"
          />
        </body>
      </html>
    );
  }
}

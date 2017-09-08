import React from 'react';
import { Link, Route } from 'react-router-dom'

export default ({ title, path, exact, children }) => (
  <Route path={path} exact={exact} children={({ match }) => (
    <div className={`item-title ${match ? 'active' : ''}`}>
      <Link to={path}>{title}</Link>
      <ul>
        {children}
      </ul>
    </div>
  )} />
)
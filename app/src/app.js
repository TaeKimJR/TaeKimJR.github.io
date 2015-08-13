import React from 'react'
import Router from 'react-router'
import Home from './pages/home'
import MainStyle from './styles/main.less'

var { Route } = Router;

var routes = (
  <Route handler={Home} path="/">
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
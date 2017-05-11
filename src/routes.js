import React from 'react';
import { Route } from 'react-router';
import Front from './front/Front';
import About from './front/About';

export default (
  <Route path="/" component={Front}>
    <Route path="/about" component={About}/>
  </Route>
)
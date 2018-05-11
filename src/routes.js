import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import Header from './App'
import Home from './Home'
import Content from './content'
/*import Contact from './Contact'*/

export default (
    <Router history={hashHistory}>
      <Route path='/' component={Header}>
        <IndexRoute component={Home}/>
        <Route path='/content' component={Content} />
        { /* <Route path='/contact' component={Contact} />*/}
      </Route>
    </Router>

);
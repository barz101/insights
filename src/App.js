import React from 'react';
import './styles/global.scss'
import Header from './cmps/Header'
import Home from './cmps/Home'
import {InsightPage} from './cmps/InsightPage'
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/insight/:id" component={InsightPage} />
    </Switch>
  </div>
)


export default App;
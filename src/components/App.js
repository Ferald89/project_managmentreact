import React from 'react';
import Layout from './Layout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
      </ Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;

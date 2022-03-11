import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

//Components
import Wilders from './components/Wilders';
import Home from './components/Home';
import AddWilderForm from './components/AddWilderForm';
// import AddWildersForm from './components/AddWilderForm'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/wilders' exact>
          <Wilders />
        </Route>
        <Route path='/wilders-form' exact>
          <AddWilderForm />
        </Route>
      </Switch>
    </>
  );
};

export default App;

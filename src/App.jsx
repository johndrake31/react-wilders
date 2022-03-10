import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Home from './components/Home';
import Wilders from './components/Wilders'
import AddWildersForm from './components/AddWilderForm'
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/wilders' exact>
          <Wilders />
        </Route>
        <Route path='/wilders-form' exact>
          <AddWildersForm />
        </Route>
      </Switch>
    </>
  );
};

export default App;

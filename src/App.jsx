import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Wilders from './components/Wilders';
// import Home from './components/Home';
// import AddWildersForm from './components/AddWilderForm'
// import Header from './components/Header';

const App = () => {
  return (
    <>
      <header>
        <h1 className='text-center'>Wilders Book</h1>
      </header>
        <Wilders></Wilders>

      
      {/* <Header />
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
      </Switch> */}
    </>
  );
};

export default App;

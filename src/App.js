import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import PetPage from './pages/PetPage/PetPage';

function App() {
  return (
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/djur/:id" component={PetPage} />
  </Switch>
  );
}

export default App;

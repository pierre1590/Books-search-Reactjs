import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Book from './components/Book';
import HomeSearch from './components/HomeSearch';
import './App.css';

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/" exact component={HomeSearch} />
            <Route path="/book/:id" componment={Book} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

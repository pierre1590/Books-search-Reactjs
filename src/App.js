import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookDetail from './pages/BookDetail';
import HomeSearch from './pages/HomeSearch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const  App = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/" exact component={HomeSearch} />
            <Route path="/book/:queryId" exact component={BookDetail} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;

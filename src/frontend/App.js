import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/shows/:details" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

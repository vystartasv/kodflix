import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import Gallery from './components/Gallery';
import "./App.css";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:details' component={Details} />
            </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

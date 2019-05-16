import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Details from './components/Details';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-140328689-1");
    ReactGA.pageview(window.location.pathname);
    this.props.history.listen((location, action) => {
      ReactGA.pageview(window.location.pathname);
    })
  }

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

export default withRouter(App);

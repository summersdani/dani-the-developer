import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import Header from './components/header';
import Landingpage from './components/landingPage';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';


import './App.css';
import './hamburgers.css';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">

        <Header />

        <Route exact path='/' component={Landingpage} />
        <Route path='/components/about' component={About} />
        <Route path='/components/portfolio' component={Portfolio} />
        <Route path='/components/contact' component={Contact} />

      </div>
      </Router>
    );
  }
}

export default App;

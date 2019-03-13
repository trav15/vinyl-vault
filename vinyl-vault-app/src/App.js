import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AlbumForm from './components/AlbumForm'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/new' component={AlbumForm}/>
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;

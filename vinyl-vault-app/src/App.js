import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VaultNavbar from './components/Navbar';
import Home from './components/Home';
import AlbumForm from './components/AlbumForm'
import VaultContainer from './containers/VaultContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <VaultNavbar/>
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/albums/new' component={AlbumForm}/>
            <Route exact={true} path='/albums' component={VaultContainer}/>
            <Route path="/*" component={Home}/>
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;

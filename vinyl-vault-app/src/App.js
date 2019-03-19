import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VaultNavbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import AddAlbumContainer from './containers/AddAlbumContainer'
import VaultContainer from './containers/VaultContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <VaultNavbar/>
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/albums/new' component={AddAlbumContainer}/>
            <Route exact={true} path='/albums' component={VaultContainer}/>
            <Route exact={true} path='/profile' component={Profile}/>
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;

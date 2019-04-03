import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VaultNavbar from './components/Navbar';
import Home from './components/Home';
import AddAlbumContainer from './containers/AddAlbumContainer'
import VaultContainer from './containers/VaultContainer'
import EditAlbumContainer from './containers/EditAlbumContainer'

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
            <Route path={'/albums/:albumId'} component={EditAlbumContainer}/>
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;

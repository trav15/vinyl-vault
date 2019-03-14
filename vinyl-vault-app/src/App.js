import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VaultNavbar from './components/Navbar';
import Home from './components/Home';
import AlbumForm from './components/AlbumForm'
import ShowAlbum from './components/ShowAlbum'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <VaultNavbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/new' component={AlbumForm}/>
            <Route exact path='/album' component={ShowAlbum}/>
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;

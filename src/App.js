import React, {Component} from 'react';

import './App.css';
// どこでimportしても設定が効いてしまうので、一旦ここに書いた
import './MainDisplay.css';

import axios from './axiosSetting.js';
import update from 'react-addons-update';
import {Redirect, Route, Switch} from 'react-router';
// @material-ui の Link と衝突するので RouterLink にしている
import {Link as RouterLink} from 'react-router-dom';

import Auth from "./components/Auth";
import MainDisplay from "./components/MainDisplay";
import SignUpDisplay from "./components/SignUpDisplay";
import SignInDisplay from "./components/SignInDisplay";
import WorldDisplay from "./components/WorldDisplay";

class App extends Component {
  constructor() {
    super();

    this.state = {
      current_page: '',
      access_token: null
    };
  }

  componentDidMount() {
    var token = localStorage.getItem('accessToken');
    this.setState({
      access_token: token
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <RouterLink to='/'>Memotter</RouterLink>
          </h1>
        </header>

        <Switch>
          <Route exact path="/sign_up" render={() => <SignUpDisplay/>}/>
          <Route exact path="/sign_in" render={() => <SignInDisplay/>}/>
          <Route exact path="/" render={() => <MainDisplay/>}/>
          <Auth>
            <Route exact path="/world" render={() => <WorldDisplay/>}/>
          </Auth>
        </Switch>
      </div>
    );
  }
}

export default App;

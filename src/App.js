import React, {Component} from 'react';

import './App.css';
// どこでimportしても設定が効いてしまうので、一旦ここに書いた
import './MainDisplay.css';

import axios from './axiosSetting.js';
import update from 'react-addons-update';
import {Redirect, Route, Switch} from 'react-router';
// @material-ui の Link と衝突するので RouterLink にしている
import {Link as RouterLink} from 'react-router-dom';
import history from './history';

import Auth from "./components/Auth";
import MainDisplay from "./components/MainDisplay";
import SignUpDisplay from "./components/SignUpDisplay";
import SignInDisplay from "./components/SignInDisplay";
import WorldDisplay from "./components/WorldDisplay";
import LogOutButton from "./components/SignOutButton";

class App extends Component {
  constructor() {
    super();

    this.state = {
      current_page: '',
      access_token: null
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('accessToken');
    this.setState({
      access_token: token
    });
  }

  setCurrentPage = (page) => {
    const token = localStorage.getItem('accessToken');
    this.setState({
      access_token: token,
      current_page: page
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <RouterLink to='/'>Memotter</RouterLink>

            <span className="App-header-logout">
              {this.state.access_token ? <LogOutButton setCurrentPage={this.setCurrentPage}/> : null}
            </span>
          </h1>
        </header>
        <Switch>
          <Auth>
            <Route exact path="/sign_up"
                   render={() => <SignUpDisplay setCurrentPage={this.setCurrentPage}/>}/>
            <Route exact path="/sign_in"
                   render={() => <SignInDisplay setCurrentPage={this.setCurrentPage}/>}/>
            <Route exact path="/" render={() => <MainDisplay/>}/>
            <Route exact path="/world" render={() => <WorldDisplay/>}/>
          </Auth>
        </Switch>
      </div>
    )
      ;
  }
}

export default App;

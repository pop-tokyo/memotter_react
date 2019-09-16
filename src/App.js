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
import RootDisplay from "./components/RootDisplay";
import SignUpDisplay from "./components/SignUpDisplay";
import SignInDisplay from "./components/SignInDisplay";
import MainDisplay from "./components/MainDisplay";

class App extends Component {
  constructor() {
    super();

    this.state = {
      current_page: '',
      username: '',
      access_token: null
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setUsername = this.setUsername.bind(this);
  }

  componentDidMount() {
    var token = localStorage.getItem('accessToken');
    this.setState({
      access_token: token
    });
  }

  setCurrentPage = (page) => {
    this.setState({
      current_page: page
    })
  };

  setUsername = (username) => {
    this.setState({
      username: username
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <RouterLink to='/'>Memotter</RouterLink>
          </h1>
        </header>
        <Switch>
          <Route exact path="/sign_up"
                 render={() => <SignUpDisplay setCurrentPage={this.setCurrentPage} setUsername={this.setUsername}/>}/>
          <Route exact path="/sign_in" render={() => <SignInDisplay/>}/>
          <Route exact path="/" render={() => <RootDisplay/>}/>
          <Auth>
            <Switch>
              <Route exact path={this.props.username}
                     render={() => <MainDisplay current_page={this.props.current_page}/>}/>
            </Switch>
          </Auth>
        </Switch>
      </div>
    )
      ;
  }
}

export default App;

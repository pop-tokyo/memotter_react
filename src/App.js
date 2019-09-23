import React, {Component} from 'react';

import './App.css';
// どこでimportしても設定が効いてしまうので、一旦ここに書いた
import './MainDisplay.css';

import {Redirect, Route, Switch} from 'react-router';
// @material-ui の Link と衝突するので RouterLink にしている
import {Link as RouterLink} from 'react-router-dom';

import Auth from "./components/Auth";
import RootDisplay from "./components/RootDisplay";
import SignUpDisplay from "./components/SignUpDisplay";
import SignInDisplay from "./components/SignInDisplay";
import WorldDisplay from "./components/WorldDisplay";
import ProfileDisplay from "./components/ProfileDisplay";
import HomeDisplay from "./components/HomeDisplay";
import LogOutButton from "./components/SignOutButton";

class App extends Component {
  constructor() {
    super();

    this.state = {
      current_page: '',
      userId: '',
      username: '',
      access_token: null
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.setUsername = this.setUsername.bind(this);
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

  setUsername = (responseData) => {
    this.setState({
      userId: responseData.id,
      username: responseData.username,
    });
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
                   render={() => <SignUpDisplay setCurrentPage={this.setCurrentPage} setUsername={this.setUsername}/>}/>
            <Route exact path="/sign_in"
                   render={() => <SignInDisplay setCurrentPage={this.setCurrentPage}/>}/>
            <Route exact path="/" render={() => <RootDisplay/>}/>
            <Route exact path="/world"
                   render={props => <WorldDisplay match={props.match}/>}/>
            <Route exact path="/home"
                   render={props => <HomeDisplay match={props.match}/>}/>
            <Route eaxt path="/users/:username" render={props => <ProfileDisplay match={props.match} userId={this.state.userId} />}/>
          </Auth>
        </Switch>
      </div>
    );
  }
}

export default App;

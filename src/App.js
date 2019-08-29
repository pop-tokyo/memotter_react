import React, {Component, useLayoutEffect} from 'react';

import './App.css';
// どこでimportしても設定が効いてしまうので、一旦ここに書いた
import './MainDisplay.css';

import axios from './axiosSetting.js';
import update from 'react-addons-update';
import {Redirect, Route, Switch} from 'react-router';
// @material-ui の Link と衝突するので RouterLink にしている
import {Link as RouterLink} from 'react-router-dom';

import MainDisplay from "./components/MainDisplay";
import SignUpDisplay from "./components/SignUpDisplay";
import SignInDisplay from "./components/SignInDisplay";
import WorldDisplay from "./components/WorldDisplay";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memos: [],
      inputValue: '',
      current_page: '',
      access_token: null
    };

    this.changeInputValue = this.changeInputValue.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentWillMount() {
    axios
      .get('/api/v1/memos')
      .then((response) => {
        console.log(response);

        this.setState({
          memos: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addPost() {
    axios.post('/api/v1/memos', {"memo": {"content": this.state.inputValue}})
      .then((response) => {
        console.log(response);

        const newData = update(this.state.memos, {$unshift: [response.data]})
        this.setState({
          memos: newData,
          inputValue: ''
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setToken() {
    var token = localStorage.getItem('accessToken');
    // TODO FIX
    // this.setState({
    //   access_token: token
    // });
  }

  render() {
    this.setToken();
    if (this.state.access_token == null) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <RouterLink to='/'>Memotter</RouterLink>
            </h1>
          </header>
          {/*Signinさせた後にlocalstorageにsetする*/}
          <SignInDisplay memos={this.state.memos}/>}/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <RouterLink to='/'>Memotter</RouterLink>
            </h1>
          </header>

          <Switch>
            <Route exact path="/" render={() => <MainDisplay memos={this.state.memos}
                                                             inputValue={this.state.inputValue}
                                                             changeInputValue={this.changeInputValue}
                                                             addPost={this.addPost}/>}/>
            <Route exact path="/sign_up" render={() => <SignUpDisplay memos={this.state.memos}/>}/>
            <Route exact path="/sign_in" render={() => <SignInDisplay memos={this.state.memos}/>}/>
            <Route exact path="/world" render={() => <WorldDisplay memos={this.state.memos}/>}/>
          </Switch>
        </div>
      );
    }
  }
}

export default App;

import React, {Component} from 'react';

import './App.css';

import axios from './axiosSetting.js';
import update from 'react-addons-update';
import { Redirect, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import SignInSide from './components/SignIn';
import ShareInput from "./components/ShareInput";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memos: [],
      inputValue: '',
      current_page: ''
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

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <Link to='/'>Memotter</Link>
          </h1>
        </header>
        <SignInSide memos={this.state.memos}/>
        <ShareInput value={this.state.inputValue} changeInputValue={this.changeInputValue} addPost={this.addPost}/>

        <Switch>
          <Route path="/sign_up" render={() => <SignInSide memos={this.state.memos} />} />
          <Route path="/sign_in" render={() => <SignInSide memos={this.state.memos} />} />
          <Redirect to="/" />;
        </Switch>
      </div>
    );
  }
}

export default App;

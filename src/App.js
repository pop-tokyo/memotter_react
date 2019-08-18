import React, {Component} from 'react';
import './App.css';
import axios from './axiosSetting.js';
import update from 'react-addons-update';
import SignInSide from './components/SignIn';
import Grid from '@material-ui/core/Grid';

import ShareInput from "./components/ShareInput";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memos: [],
      inputValue: '',
      current_user: '1234'
    };

    this.changeInputValue = this.changeInputValue.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
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
          <h1>Memotter</h1>
        </header>
        <SignInSide memos={this.state.memos}/>
        <div className="ShareInput">
          <ShareInput value={this.state.inputValue} changeInputValue={this.changeInputValue} addPost={this.addPost}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

import './App.css';

import axios from './axiosSetting.js';
import update from 'react-addons-update';
import { Redirect, Route, Switch } from 'react-router';
// @material-ui の Link と衝突するので RouterLink にしている
import { Link as RouterLink } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import ShareInput from "./components/ShareInput";
import MemoList from "./components/MemoList";
import SignInDisplay from "./components/SignInDisplay";

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
            <RouterLink to='/'>Memotter</RouterLink>
          </h1>
        </header>

        <Grid container component="main" className="left-container">
          <CssBaseline/>
        </Grid>

        <Switch>
          <Route exact path="/" render={() => <SignInDisplay memos={this.state.memos} />} />
          <Route path="/sign_up" render={() => <SignInDisplay memos={this.state.memos} />} />
          <Route path="/sign_in" render={() => <SignInDisplay memos={this.state.memos} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

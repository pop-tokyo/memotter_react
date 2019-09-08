import React from 'react';

// @material-ui の Link と衝突するので RouterLink にしている
import {Link as RouterLink} from 'react-router-dom';

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
import MemoList from "./MemoList";

import MemoFamily from "./MemoFamily";
import SignUpForm from "./SignUpForm";

export default function SignUpDisplay(props) {
  return (
    <Grid container component="main" className="left-container">
      <CssBaseline/>

      <MemoFamily gridXs={6} gridMd={6} requiredMemoInput={false} displayClassName=""/>
      <SignUpForm history={props.history} gridXs={6} gridMd={6}/>
    </Grid>
  );
};

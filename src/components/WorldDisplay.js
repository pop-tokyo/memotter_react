import React from 'react';

// @material-ui の Link と衝突するので RouterLink にしている
import {Link as RouterLink} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Menu from "./Menu";
import Grid from '@material-ui/core/Grid'

export default function WorldDisplay(props) {
  return (
    <Grid container component="main" className="left-container">
      <CssBaseline/>
      <Menu
            inputValue={props.inputValue}
            changeInputValue={props.changeInputValue}
            addPost={props.addPost} />
    </Grid>
  );
}

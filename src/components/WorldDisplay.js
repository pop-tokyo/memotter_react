import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'

import Menu from "./Menu";

export default function WorldDisplay(props) {
  return (
    <Grid container component="main" className="left-container">
      <CssBaseline/>

      <Menu/>
    </Grid>
  );
}

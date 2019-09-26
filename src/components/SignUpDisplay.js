import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import MemoFamily from "./MemoFamily";
import SignUpForm from "./SignUpForm";

export default function SignUpDisplay(props) {
  return (
    <Grid container component="main" className="left-container">
      <CssBaseline/>

      <MemoFamily gridXs={6} gridMd={6} requiredMemoInput={false} displayClassName=""/>
      <SignUpForm setCurrentPage={props.setCurrentPage} setUsername={props.setUsername} gridXs={6} gridMd={6}/>
    </Grid>
  );
};

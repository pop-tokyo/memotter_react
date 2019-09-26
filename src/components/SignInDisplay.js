import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import MemoFamily from "./MemoFamily";
import SignInForm from "./SignInForm";

export default function SignInDisplay(props) {
  return (
    <Grid container component="main" className="left-container">
      <CssBaseline/>

      <MemoFamily gridXs={6} gridMd={6} requiredMemoInput={false} displayClassName=""/>
      <SignInForm setCurrentPage={props.setCurrentPage} gridXs={6} gridMd={6}/>
    </Grid>
  );
}

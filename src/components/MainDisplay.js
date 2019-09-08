import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import MemoFamily from "./MemoFamily";

export default function MainDisplay(props) {
  return (
    <Grid container component="main" className="left-container">
      <CssBaseline/>

      <MemoFamily gridXs={12} gridMd={12} requiredMemoInput={true} displayClassName="MainDisplay-memos"/>
    </Grid>
  );
}

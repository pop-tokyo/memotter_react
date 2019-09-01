import React from 'react';

// @material-ui の Link と衝突するので RouterLink にしている
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import MemoList from "./MemoList";
import ShareInput from "./ShareInput";

export default function MainDisplay(props) {
  return (
    <Grid container component="main" className="left-container">
      <CssBaseline/>

      <ShareInput value={props.inputValue}
                  changeInputValue={props.changeInputValue}
                  addPost={props.addPost}
                  gridXs={12}
                  gridMd={12} />
      <MemoList memos={props.memos}
                gridXs={12}
                gridMd={12}
                isMainDisplay={true} />
    </Grid>
  );
}

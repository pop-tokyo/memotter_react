import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MemoFamily from "./MemoFamily";
import MenuBar from "./MenuBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  indicator: {
    backgroundColor: '#FFFFFF',
  },
  memos: {
    width: '50%',
  },
}));

export default function WorldDisplay(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <MenuBar username={props.match.params.username}/>
        <MemoFamily gridXs={12} gridMd={12} requiredMemoInput={true} current_page='/world' displayClassName=""/>
    </div>
  );
}

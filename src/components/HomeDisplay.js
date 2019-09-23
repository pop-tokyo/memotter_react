import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MemoFamily from "./MemoFamily";
import MenuBar from "./MenuBar";

export default function HomeDisplay(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div className={classes.root}>
      <MenuBar username={props.match.params.username}/>
      <p>coming soon...</p>
    </div>
  );
}

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

import React, {useState, useEffect} from 'react';
import axios from "../axiosSetting";

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MemoList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [memos, setMemos] = React.useState([]);

  function getMemos() {
    axios
      .get('/api/v1/memos')
      .then((response) => {
        console.log(response);
        setMemos(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMemos();
  }, []);

  const list = memos.map((memo, index) => {
    return (
      <ListItem key={index}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={memo.content}
          secondary={null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  });

  return (
    <Grid item xs={props.gridXs} md={props.gridMd}>
      <div className={props.isMainDisplay ? "MainDisplay-memos" : ""}>
        <Typography variant="h6" className="list">
          最新のみんなのmemos
        </Typography>

        <List dense={dense}>
          {list}
        </List>
      </div>
    </Grid>
  );
}

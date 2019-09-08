import React, { useState, useEffect } from 'react';

import axios from '../axiosSetting.js';
import update from 'react-addons-update';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

export default function MemoFamily(props) {
  const [dense, setDense] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    getMemos();
  }, []);

  const getMemos = () => {
    axios
      .get('/api/v1/memos')
      .then((response) => {
        console.log(response);
        setMemos(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addMemo = () => {
    axios.post('/api/v1/memos', { "memo": { "content": inputValue } })
      .then((response) => {
        console.log(response);
        const newData = update(memos, { $unshift: [response.data] });
        setMemos(newData);
        setInputValue('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      {/* @see https://chaika.hatenablog.com/entry/2019/05/16/083000 */}
      {
        (() => {
          if (props.requiredMemoInput === true) {
            return (
              <div>
                {/* @see https://www.freecodecamp.org/news/how-to-get-started-with-react-hooks-controlled-forms-826c99943b92/ */}
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button onClick={addMemo}>シェア</button>
              </div>
            )
          } else {
            return null;
          }
        })()
      }

      <div className={props.displayClassName}>
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

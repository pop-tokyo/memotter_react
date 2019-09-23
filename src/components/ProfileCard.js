import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {deepOrange, deepPurple} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// TODO: 使えない
// import HUE from '@material-ui/core/colors/HUE';

import cat1 from '../images/cat1.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 140,
  },
  profileIcon: {
    width: 100,
    borderRadius: '50%',
  },
  followButton:{
  }
});

export default function ProfileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container justify="center" alignItems="center">
            <img src={cat1} alt="cat1" className={classes.profileIcon}/>
            <Typography gutterBottom variant="h5" component="h2">
              Sayatam
            </Typography>
            <Button variant="outlined" color="secondary" className={classes.followButton}>
              Follow!
            </Button>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            I've been getting bored with Rails hehe.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          500 Memos
        </Button>
        <Button size="small" color="primary">
          1 Followings
        </Button>
        <Button size="small" color="primary">
          1000 Followers
        </Button>
      </CardActions>
    </Card>
  );
}

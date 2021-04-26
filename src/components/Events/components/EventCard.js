import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Collapse,
} from '@material-ui/core';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import useIsMobile from '../../../hooks/useIsMobile';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // display: 'flex',
//     padding: '8px',
//   },
//   expand: {
//     // maxWidth: 34,
//     transform: 'rotate(0deg)',
//     // marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   cover: {
//     width: 151,
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  cover: { height: '250px', overflow: 'hidden' },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    boxShadow: 'none',
    borderRadius: 'inherit',
    width: '100%',
    transform: 'rotate(0deg)',
    border: '0px',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
const EventCard = ({ name, description }) => {
  const classes = useStyles();
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              {name}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {name}
            </Typography>
          </CardContent>
        </div>
        {!isMobile && (
          <CardMedia
            component='img'
            className={classes.cover}
            src='https://res.cloudinary.com/dashed/image/upload/v1611051427/acm/klgjkuqdehb2g4buvprx.png'
            title='Naya event brrrr'
          />
        )}
        <CardActions disableSpacing>
          <Grid container justify='center' alignItems='center'>
            <Grid item xs>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Collapse in={expanded} timeout='auto'>
        <CardContent>
          <Typography variant='h3'>
            <u>{name}</u>
          </Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </div>
  );
};
export default EventCard;

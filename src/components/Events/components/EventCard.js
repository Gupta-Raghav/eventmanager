import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import useIsMobile from '../../../hooks/useIsMobile';
import { truncateString } from '../../../utils/utilityFunctions';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  appBar: {
    position: 'relative',
  },
  cover: { height: '460px', overflow: 'hidden' },
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
const EventCard = ({ name, type, poster, eventObject, dialogCallback }) => {
  // TODO : pass down date and other event items as props here. display as necessary
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
              {truncateString(name, 25)}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {type}
            </Typography>
          </CardContent>
        </div>
        {!isMobile && (
          <Box boxShadow={4}>
            <CardMedia
              component='img'
              className={classes.cover}
              src={
                poster
                  ? poster
                  : 'https://res.cloudinary.com/dashed/image/upload/v1611051427/acm/klgjkuqdehb2g4buvprx.png'
              }
              title='Naya event brrrr'
            />
          </Box>
        )}
        <CardActions disableSpacing>
          <Grid container justify='center' alignItems='center'>
            <Grid item xs>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => {
                  dialogCallback(eventObject);
                }}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};
export default EventCard;

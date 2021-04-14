import React, { useState } from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Collapse,
} from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useIsMobile from '../../../hooks/useIsMobile';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '8px',
  },
  expand: {
    // maxWidth: 34,
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  cover: {
    width: 151,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  content: {
    flex: '1 0 auto',
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
      {/* <Accordion square expanded={true}>
        <AccordionSummary>
          <Typography>Brrr</Typography>
          <img
            src='https://res.cloudinary.com/dashed/image/upload/v1611051427/acm/klgjkuqdehb2g4buvprx.png'
            className={classes.cover}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>BRRRR</Typography>
        </AccordionDetails>
      </Accordion> */}
      {/*  */}
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
        <CardContent style={{ width: '100%' }} />
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
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

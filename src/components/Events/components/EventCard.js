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

export const EventCard = () => {
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
              h4x0rm4n
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              MPST
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
            <u>ACM Mini Hacks MUJ</u>
          </Typography>
          CSS FIX KARNA HAI
          <Typography paragraph>
            <b>MUJ ACM S-CHAP </b>brings to you a series of mini Hackathons to
            prep you up for the bigger shows.
          </Typography>
          <Typography paragraph>
            Compete with your team of 4 on 29th, 30th and 31st January and drill
            your coding skills to come out as best creators!
          </Typography>
          <Typography paragraph>
            Hackathon Day - 0 is 29th January. Further information would be
            communicated to the participants.
          </Typography>
          <Typography paragraph>
            ++Free for ACM Members++ Non ACM Members: Fee Mentioned Prizes are
            cash and kind. Prize pool may increase! Last date to register: 28th
            January, 2021
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </div>
  );
};

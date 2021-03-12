import React, {useState} from 'react'
import {
  makeStyles,
  Select,
  Button,
  Modal,
  Backdrop,
  Fade,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  InputLabel,
  Paper,
  IconButton,
  AppBar,
  CardActions ,
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  InputAdornment,
  FormControl,
  OutlinedInput,
  Toolbar,
  FilledInput,
  Collapse,
} from '@material-ui/core';
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import imgg from './../../navbar/MUJProspectus.png'
import hacks from './../../../assets/hacks.jpeg'

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
    },
    expand: {
        // maxWidth: 34,
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
      cover: {
    width: 151,
  },   
    details:{
        display: 'flex',
        flexDirection: 'column',
    },
     expandOpen: {
    transform: 'rotate(180deg)',
  },
    content:{
        flex : '1 0 auto',
    }
}
));


export const EventCard = () => {
    const classes = useStyles();
     const [expanded, setExpanded] = useState(false);
     const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <div>
              <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          h4x0rm4n
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          MPST
          </Typography>
        </CardContent>
      </div>
      <CardMedia
      component='img'
        className={classes.cover}
        // img="https://res.cloudinary.com/dashed/image/upload/v1611051427/acm/klgjkuqdehb2g4buvprx.png"
        img={hacks}
        title="Naya event brrrr"
      />
      <CardActions disableSpacing>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
              <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
              </CardContent>
      </Collapse>
    </Card> 
        </div>
    )
}

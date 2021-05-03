import React from 'react';
import {
  makeStyles,
  Grid,
  List,
  ListItem,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  AppBar,
  Slide,
  Toolbar,
  Typography,
  IconButton,
  CardActions,
  Collapse,
  Divider,
} from '@material-ui/core';
const useStyles = makeStyles(() => ({
  mainGrid: {
    paddingTop: '8px',
  },
}));
export default function EventRegistration({ content }) {
  /* ADD A LOADER HERE IN CASE CONTENT.PROPERTY ISNT AVAILABLE */
  const classes = useStyles();
  return (
    <Grid container direction='row' className={classes.mainGrid}>
      <Grid item xs={1} />
      <Grid item xs>
        <Grid
          container
          direction='column'
          alignContent='center'
          spacing={2}
          style={{ paddingBottom: '32px' }}
        >
          <Grid item>
            <Typography variant='h2'>{content.name}</Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
        </Grid>
        <Grid container spacing={2} direction='row' justify='space-evenly'>
          <Grid item xs>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4'>Description: </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>{content.description} </Typography>
              </Grid>
              <Grid item style={{ paddingTop: '16px' }}>
                <Typography variant='h4'>Contact details: </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>{content.description} </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4'>Event details </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <b>Fees:</b> 1200/-
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <b>Date:</b> 10/05/2021 - 17/05/2021
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <b>Prize:</b> 50000
                </Typography>
              </Grid>
              <Grid item style={{ paddingTop: '16px' }}>
                <Typography variant='h4'>Rules</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  All decisions made by the judges are final
                </Typography>
              </Grid>
              <Grid item>
                <Typography>No refunds</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs style={{ paddingTop: '32px' }}>
          <Grid
            container
            spacing={2}
            direction='column'
            alignContent='center'
            style={{ paddingTop: '32px' }}
          >
            <Button>Register Now</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}

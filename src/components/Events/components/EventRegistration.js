import React from 'react';
import {
  makeStyles,
  Grid,
  Button,
  Typography,
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
  console.log(content);
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
            <Typography variant='h2'>{content.title}</Typography>
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
                <Typography variant='body1'>
                  Event manager : +919876543210
                </Typography>
                <Typography variant='body1'>eventmanager@gmail.com</Typography>
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
                  <b>Registration fees:</b>{' '}
                  {content.amount === null ? 'Free' : content.amount}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <b>Date:</b> {content.eventStartDate} to{' '}
                  {content.eventEndDate}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <b>Prize:</b> {content.prizeMoney}
                </Typography>
              </Grid>
              <Grid item style={{ paddingTop: '16px' }}>
                <Typography variant='h4'>Rules</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  Event organizers hold all rights to add/remove participants.
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  All decisions made by the judges are final in case of a
                  competitive event.
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
            <Button>
              <a
                href='https://forms.gle/bz14iHDQBRZfnzNg7'
                target='_blank'
                rel='noreferrer'
              >
                Register Now
              </a>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}

import React from 'react';
import './notfoundpage.css';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: 'white',
    width: '100vw',
    height: '100vh',
  },
  top: {},
}));

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify='center'
      spacing={2}
      alignItems='center'
      direction='column'
    >
      <Grid item xs className={classes.top}>
        <Typography variant='h1'>Nahi mila</Typography>
      </Grid>
      <Grid item xs>
        <Paper className={classes.paper} elevation={0} />
      </Grid>
    </Grid>
  );
};
export default NotFoundPage;

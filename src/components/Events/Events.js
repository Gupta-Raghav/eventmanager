import React, { useState, useEffect, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Selector from './components/Selector';
import {
  makeStyles,
  Select,
  Button,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Grid,
  InputLabel,
  AppBar,
  Divider,
  InputAdornment,
  FormControl,
  OutlinedInput,
  Toolbar,
  FilledInput,
} from '@material-ui/core';
import Navbar from '../navbar/Navbar';
import './Events.css';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import { firebase, googleAuthProvider, auth } from '../../firebase';

// TODO : https://material-ui.com/components/pickers/
const useStyles = makeStyles(() => ({
  eventsbg: {
    backgroundColor: '#f3f3f3',
  },
  margin: {
    margin: '8px',
  },
  text: { color: '#95461E', fontFamily: 'Montserrat, sans-serif' },
}));

export default function Events() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const history = useHistory();
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user, history]);
  return (
    <div
      className='events'
      className={classes.eventsbg}
      style={{ color: '#010101' }}
    >
      <Navbar />
      <Grid container justify='space-evenly'>
        <Grid item xs />
        <Grid item xs={9}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Typography className={classes.text}>
                <a href='/upcoming'>
                  <h2 className='upcoming'>Upcoming Events</h2>
                </a>
              </Typography>
            </Grid>
            <Divider />
            <Grid item style={{ textAlign: 'center', padding: '5em 0em' }}>
              <Typography>CAROUSEL GOES HERE </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <FormControl
                fullWidth
                className={classes.margin}
                // variant='outlined'
                variant='filled'
                // NEED TO DECIDE BETWEEN OUTLINED AND FILLED @RG
              >
                <InputLabel htmlFor='filled-adornment-amount'>
                  Search
                </InputLabel>
                {/* <OutlinedInput */}
                <FilledInput
                  id='outlined-adornment-amount'
                  value={searchItem}
                  placeholder='Fests, Events, Organizations...'
                  onChange={(e) => setSearchItem(e.target.value)}
                  startAdornment={
                    <InputAdornment position='start'>:</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Selector
                    searchItem={searchItem}
                    setSearchItem={setSearchItem}
                    list={['ACM', 'IEEE', 'TMC']}
                  />
                </Grid>
                <Grid item>
                  <Selector
                    // TODO: set-up separate states for separate selectors
                    searchItem={searchItem}
                    setSearchItem={setSearchItem}
                    list={['ACM', 'IEEE', 'TMC']}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

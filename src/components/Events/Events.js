import React, { useState, useEffect, createContext, useContext } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Selector from './components/Selector';
// import DateFnsUtils from '@date-io';
import {EventCard} from './components/EventCard'
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
  AppBar,
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
} from '@material-ui/core';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import Navbar from '../navbar/Navbar';
import './Events.css';
import { UserContext } from '../providers/UserProvider';
import AppState from '../../store/configureStore'
import { Redirect } from 'react-router-dom';
import { firebase, googleAuthProvider, auth } from '../../firebase';

// TODO : https://material-ui.com/components/pickers/
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '8px',
    marginRight: '8px',
    width: 200,
  },
  paper:{
    margin: '8px',
    width: '100%',
    height: '128px',
  },
  eventsbg: {
    backgroundColor: '#f3f3f3',
  },
  margin: {
    margin: '8px',
  },
  text: { color: '#95461E', fontFamily: 'Montserrat, sans-serif' },
}));

export default function Events() {
  const useSelector=((s)=> console.log(s))
  const classes = useStyles();
  const user = useContext(UserContext);
  const history = useHistory();
  const [searchItem, setSearchItem] = useState('');
  const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  const [endDate, setEndDate] = useState(new Date('2014-08-18T21:11:54'));
   const handleDateChange = (date) => {
    setStartDate(date);
  };
  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user, history]);
  return (
    // <MuiPickersUtilsProvider >\
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
                  <h2 >Upcoming Events</h2>
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
              >
                <InputLabel htmlFor='filled-adornment-amount'>
                  Search
                </InputLabel>
                {/* <OutlinedInput */}
                <FilledInput
                  id='filled-adornment-amount'
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
                <Grid className={classes.margin} container justify='space-between'>
 <Grid item >
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
            <Grid item >
              <Grid container>
                <Grid item>
                  <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
                </Grid>
                <Grid item>
                  <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="End Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
                </Grid>
                
              </Grid>
            </Grid>
                  </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
      <Grid container justify='space-evenly'>
        <Grid item xs/>
        <Grid item xs={9}>
          {/* <Paper className={classes.paper}/> */}
          <EventCard />
        </Grid>
        <Grid item xs/>
        </Grid>
    </div>
    // </MuiPickersUtilsProvider>
  );
}

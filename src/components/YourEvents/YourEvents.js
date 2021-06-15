import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {} from 'react-router-dom';
// import DateFnsUtils from '@date-io';
// import { EventCard } from './components/EventCard';
import { db } from '../../firebase';
import EventRegistration from '../Events/components/EventRegistration';

import {
  Dialog,
  Slide,
  makeStyles,
  Typography,
  Grid,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  IconButton,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditEvent from '../CreateEventForm/EditEvent';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import Navbar from '../navbar/Navbar';
// TODO : https://material-ui.com/components/pickers/
const useStyles = makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '8px',
    marginRight: '8px',
    width: 200,
  },
  paper: {
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
  date: {
    padding: '8px',
  },
  buttons: {
    maxWidth: '30px',
    maxHeight: '30px',
    minWidth: '30px',
    minHeight: '30px',
    boxShadow: 'none',
  },
  text: { color: '#95461E', fontFamily: 'Montserrat, sans-serif' },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
export default function YourEvents() {
  const classes = useStyles();
  var { events } = useSelector((s) => s);
  const [showToggle, setshowToggle] = useState(true);
  const [dialog, setDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    name: 'Title',
    description: 'description',
  });
  const updateEvents = useCallback(
    (title, value) => {
      const eventIndex = events.findIndex((event) => event.title === title);
      events[eventIndex].FCPermission = value;
      events[eventIndex].FCRejected = !value;
    },
    [events]
  );
  const handleDialog = (event) => {
    const {
      title,
      description,
      eventStartDate,
      eventStartTime,
      eventEndDate,
      eventEndTime,
      type,
      venue,
      sponsorToggle,
      sponsorName,
      amount,
      poster,
    } = event;
    setDialog(!dialog);
    setDialogContent({
      title,
      description,
      eventStartDate,
      eventStartTime,
      eventEndDate,
      eventEndTime,
      type,
      venue,
      sponsorToggle,
      sponsorName,
      amount,
      poster,
    });
  };
  useEffect(() => {
    console.log('side effect');
  }, [events, showToggle]);
  return (
    // <MuiPickersUtilsProvider >\
    <div className={classes.eventsbg} style={{ color: '#010101' }}>
      <Dialog
        fullScreen
        open={dialog}
        onClose={() => {
          setDialog(false);
        }}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              style={{ width: 'auto', boxShadow: 'none' }}
              onClick={() => {
                setDialog(false);
              }}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Edit
            </Typography>
          </Toolbar>
        </AppBar>
        {/* EDIT EVENT COMPONENT */}
        <EditEvent dialogContent={dialogContent} />
      </Dialog>
      <Navbar />
      <Grid container justify='space-evenly'>
        <Grid item xs />
        <Grid item xs={9}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Typography className={classes.text}>
                <h2>Your Events</h2>
              </Typography>
            </Grid>
            <Grid item>
              <TableContainer component={Paper} style={{ margin: '8px 0px' }}>
                <Table className={classes.table} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Event Name</TableCell>
                      <TableCell align='right'>Club</TableCell>
                      <TableCell align='right'>Date</TableCell>
                      <TableCell align='right'>Venue</TableCell>
                      <TableCell align='right'>Approved by</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {events.map((event) =>
                      event.DSWPermission && !event.DSWRejected ? (
                        <TableRow key={event.name}>
                          <TableCell component='th' scope='row'>
                            {event.title}
                          </TableCell>
                          <TableCell align='right'>ACM</TableCell>
                          <TableCell align='right'>
                            {event.eventStartDate}
                          </TableCell>
                          <TableCell align='right'>{event.venue}</TableCell>
                          <TableCell align='right'>DSW</TableCell>
                        </TableRow>
                      ) : event.FCPermission && !event.FCRejected ? (
                        <TableRow key={event.name}>
                          <TableCell component='th' scope='row'>
                            {event.title}
                          </TableCell>
                          <TableCell align='right'>ACM</TableCell>
                          <TableCell align='right'>
                            {event.eventStartDate}
                          </TableCell>
                          <TableCell align='right'>{event.venue}</TableCell>
                          <TableCell align='right'>
                            Faculty Co-ordinator
                          </TableCell>
                        </TableRow>
                      ) : null
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>
                <h3>Rejected Events</h3>
              </Typography>
            </Grid>
            <Grid item>
              <TableContainer component={Paper} style={{ margin: '8px 0px' }}>
                <Table className={classes.table} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Event Name</TableCell>
                      <TableCell align='right'>Club</TableCell>
                      <TableCell align='right'>Date</TableCell>
                      <TableCell align='right'>Venue</TableCell>
                      <TableCell align='right'>Rejected by</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {events.map((event) =>
                      event.FCRejected && !event.FCPermission ? (
                        <TableRow key={event.name}>
                          <TableCell
                            component='th'
                            scope='row'
                            onClick={() => handleDialog(event)}
                          >
                            {event.title}
                          </TableCell>
                          <TableCell align='right'>ACM</TableCell>
                          <TableCell align='right'>
                            {event.eventStartDate}
                          </TableCell>
                          <TableCell align='right'>{event.venue}</TableCell>
                          <TableCell align='right'>
                            <Typography>Faculty Co-ordinator</Typography>
                          </TableCell>
                        </TableRow>
                      ) : event.DSWRejected && !event.DSWPermission ? (
                        <TableRow key={event.name}>
                          <TableCell
                            component='th'
                            scope='row'
                            onClick={() => handleDialog(event)}
                          >
                            {event.title}
                          </TableCell>
                          <TableCell align='right'>ACM</TableCell>
                          <TableCell align='right'>
                            {event.eventStartDate}
                          </TableCell>
                          <TableCell align='right'>{event.venue}</TableCell>
                          <TableCell align='right'>
                            <Typography>DSW</Typography>
                          </TableCell>
                        </TableRow>
                      ) : null
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
    // </MuiPickersUtilsProvider>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import DateFnsUtils from '@date-io';
// import { EventCard } from './components/EventCard';
import { db } from '../../firebase';
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
import { addEventToStore, editevent } from '../../actions/events';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CloseIcon from '@material-ui/icons/Close';
import EventRegistration from '../Events/components/EventRegistration';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import Navbar from '../navbar/Navbar';
import useEvents from '../../hooks/useEvents';
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
export default function Events() {
  const [dialog, setDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    name: 'Title',
    description: 'description',
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { events } = useSelector((s) => s);
  var events = useEvents();
  const titles = events.map((e) => e.title);
  const [showToggle, setshowtoggle] = useState(true);
  const fetchEvents = useCallback(async () => {
    const res = await db.collection(`Clubs/ACM/Events`).get();
    res.docs.forEach((item) => {
      const event = item.data();
      if (event && !titles.includes(event.title)) {
        dispatch(addEventToStore(event));
      }
    });
  }, [dispatch, titles]);
  const handleApproval = useCallback(
    (title) => {
      db.collection(`Clubs/ACM/Events`).doc(title).update({
        DSWPermission: true,
        DSWRejected: false,
      });
      setshowtoggle(false);
      dispatch(editevent(title, { DSWPermission: true, DSWRejected: false }));
      fetchEvents();
    },
    [dispatch, fetchEvents, setshowtoggle]
  );

  const handleReject = useCallback(
    (title) => {
      db.collection(`Clubs/ACM/Events`).doc(title).update({
        DSWPermission: false,
        DSWRejected: true,
      });
      setshowtoggle(false);
      dispatch(editevent(title, { DSWPermission: false, DSWRejected: true }));
      fetchEvents();
    },
    [dispatch, fetchEvents, setshowtoggle]
  );
  useEffect(() => {
    console.log(events);
  }, [fetchEvents, handleApproval, handleReject, events, showToggle]);
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
    });
  };
  return (
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
              Register
            </Typography>
          </Toolbar>
        </AppBar>
        <EventRegistration content={dialogContent} />
      </Dialog>
      <Navbar />
      <Grid container justify='space-evenly'>
        <Grid item xs />
        <Grid item xs={9}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Typography className={classes.text}>
                <h2>Admin Dashboard</h2>
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
                      <TableCell align='right'>Approve/Deny</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {events.map((event) =>
                      !event.DSWRejected && !event.DSWPermission ? (
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
                            <Grid container direction='row' justify='flex-end'>
                              <Grid item xs={2}>
                                <IconButton
                                  disableElevation
                                  className={classes.buttons}
                                  aria-label='delete'
                                  onClick={() => handleApproval(event.title)}
                                >
                                  <CheckIcon style={{ color: 'green' }} />
                                </IconButton>
                              </Grid>
                              <Grid item xs={2}>
                                <IconButton
                                  className={classes.buttons}
                                  aria-label='delete'
                                  onClick={() => handleReject(event.title)}
                                >
                                  <ClearIcon style={{ color: 'red' }} />
                                </IconButton>
                              </Grid>
                            </Grid>
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
                      <TableCell align='right'>Approve/Deny</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {events.map((event) =>
                      event.DSWRejected && !event.DSWPermission ? (
                        <TableRow key={event.name}>
                          <TableCell component='th' scope='row'>
                            {event.title}
                          </TableCell>
                          <TableCell align='right'>ACM</TableCell>
                          <TableCell align='right'>{event.date}</TableCell>
                          <TableCell align='right'>{event.venue}</TableCell>
                          <TableCell align='right'>
                            <Grid container direction='row' justify='flex-end'>
                              <Grid item xs={2}>
                                <IconButton
                                  disableElevation
                                  className={classes.buttons}
                                  aria-label='delete'
                                  onClick={() => handleApproval(event.title)}
                                >
                                  <CheckIcon style={{ color: 'green' }} />
                                </IconButton>
                              </Grid>
                              <Grid item xs={2}>
                                <IconButton
                                  className={classes.buttons}
                                  aria-label='delete'
                                  onClick={() => handleReject(event.title)}
                                >
                                  <ClearIcon style={{ color: 'red' }} />
                                </IconButton>
                              </Grid>
                            </Grid>
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
  );
}

import React, { useState, useEffect, createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import DateFnsUtils from '@date-io';
// import { EventCard } from './components/EventCard';
import { db } from '../../firebase';
import {
  makeStyles,
  Select,
  Button,
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
  Icon,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import Navbar from '../navbar/Navbar';
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

export default function Events() {
  const classes = useStyles();
  const { events } = useSelector((s) => s);
  const history = useHistory();
  const [showtoggle, setshowtoggle] = useState(true)
  const handleApproval = (title) => {
    db.collection(`Clubs/ACM/Events`).doc(title).update({
      DSWPermission:true,
    });
    setshowtoggle(false);
  };
  const handleReject = (title) => {
    db.collection(`Clubs/ACM/Events`).doc(title).update({
      DSWPermission: false,
    });
    setshowtoggle(false);
  };
  useEffect(() => {}, [db]);
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
                  <h2>Admin's Dashboard</h2>
                </a>
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
                    {events.map((event) => (
                       event.FCPermission ?(event.DSWPermission ? (null) : (<TableRow key={event.name}>
                        <TableCell component='th' scope='row'>
                          {event.title}
                        </TableCell>
                        <TableCell align='right'>ACM</TableCell>
                        <TableCell align='right'>14/01/21</TableCell>
                        <TableCell align='right'>{event.venue}</TableCell>
                        <TableCell align='right'>
                          <Grid container direction='row' justify='flex-end'>
                            <Grid item xs={2}>
                              <IconButton
                                disableElevation
                                className={classes.buttons}
                                aria-label='delete'
                                onClick= {()=> handleApproval(event.title)}
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
                      </TableRow>) ):(null) 
                    ))}
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

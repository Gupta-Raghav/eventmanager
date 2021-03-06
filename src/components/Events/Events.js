import React, { useState, useEffect, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  Button,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Grid,
  AppBar,
  Divider,
  Toolbar,
} from '@material-ui/core';
import Navbar from '../navbar/Navbar';
import './Events.css';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import { firebase, googleAuthProvider, auth } from '../../firebase';


const useStyles = makeStyles(() => ({}));

export default function Events() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user, history]);
  return (
    <div className="events">
      <Navbar />
      <div >
      <a href="/upcoming"><h2 className="upcoming">Upcoming Events</h2></a>
      </div>
    </div>
  );
}

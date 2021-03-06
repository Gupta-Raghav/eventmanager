import React , {useState,useEffect,createContext, useContext} from 'react';
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
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles(() => ({
}));
export default function Events() {
    const classes = useStyles();
    const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);
  if (redirect) {
    <Redirect to={redirect} />;
  }
    return (
        <>
        <Navbar/>
        </>
    )
}

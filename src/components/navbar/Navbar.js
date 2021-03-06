import React, { useContext, useEffect, useState } from 'react'
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
import logo from './mujlogo.png';
import './navbar.css'
import UserProvider, { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '16px',
  },
  img:{
      marginTop: '4px',
      paddingTop: '4px',
    height: '3em',
    width: '14em',
  },
  title: {
      color: 'black',
    flexGrow: 1,
  },
}));
const startLogOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}
export default function Navbar() {
    const classes = useStyles();
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    
    useEffect(() => {
      if (!user) {
        setRedirect("/");
      }
    }, [user]);
    if (redirect) {
      <Redirect to={redirect} />;
    }
    return (
        <div className={classes.root}>
            <AppBar position='static' className='navbar'>
                <Toolbar>
                    <div className={classes.menuButton}>
                        <img src={logo} className={classes.img} alt='logo'/>
                    </div>
                    {/* <Typography variant='h5' className={classes.title}>
                        MUJ EVENTS BRRRR
                        </Typography> */}
                        <Button color='inherit' className={classes.button} onClick={startLogOut}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

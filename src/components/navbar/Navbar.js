import React, { useContext, useEffect, useState } from 'react';
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
  CircularProgress,
  Avatar,
} from '@material-ui/core';
import logo from './mujlogo.png';
import './navbar.css';
import UserProvider, { UserContext } from '../providers/UserProvider';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { firebase } from './../../firebase';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingBottom: '1em',
  },
  menuButton: {
    paddingTop: '4px',
    marginRight: '16px',
  },
  img: {
    marginTop: '4px',
    paddingTop: '4px',
    height: '3em',
    width: '14em',
  },
  button: {
    border: '0px',
    color: 'black',
    fontWeight: 'inherit',
    textDecoration: 'none',
  },
  title: {
    color: 'black',
    flexGrow: 1,
  },
  navbarGrid: {
    marginTop: '4px',
    paddingTop: '4px',
    // alignSelf: 'center',
    // justifyContent: 'space-between',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const history = useHistory();
  // if(user && user.email){
  //   const userEmail = user.email;
  // }
  // const [redirect, setRedirect] = useState(null);
  // useEffect(() => {
  //   if (!user) {
  //     setRedirect('/');
  //   }
  // }, [user]);
  // if (redirect) {
  //   <Redirect to={redirect} />;
  // }
  const startLogOut = () => {
    auth
      .signOut()
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className={classes.root}>
      <AppBar position='static' className='navbar'>
        <Toolbar>
          <Grid container row justifyContent='space-between'>
            <Grid item xs>
              <Link
                to='/events'
                className={classes.menuButton}
                style={{ textDecoration: 'none' }}
              >
                <img src={logo} className={classes.img} alt='logo' />
              </Link>
            </Grid>
            <Grid item xs />
            <Grid item xs>
              <Grid container direction='column'>
                <Grid item xs={2} />
                <Grid item xs className={classes.navbarGrid}>
                  <Grid container justifyContent='center' alignItems='center'>
                    {!user && (
                      <Grid item xs>
                        <CircularProgress className={classes.button} />
                      </Grid>
                    )}
                    {user &&
                    user.email ===
                      ('karan1501mannan@gmail.com' ||
                        'raghuweer23@gmail.com') ? (
                      <>
                        <Grid item xs>
                          <Link to='/organizer'>
                            <Button
                              color='inherit'
                              className={classes.button}
                              style={{ boxShadow: '0px' }}
                              disableElevation
                            >
                              📇 faculty tab
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs>
                          <Link to='/admin'>
                            <Button
                              color='inherit'
                              className={classes.button}
                              style={{ boxShadow: '0px' }}
                              disableElevation
                            >
                              📇 organizer tab
                            </Button>
                          </Link>
                        </Grid>
                      </>
                    ) : (
                      <Grid item xs>
                        <Link to='/createevent'>
                          <Button
                            color='inherit'
                            className={classes.button}
                            style={{ boxShadow: '0px' }}
                            disableElevation
                          >
                            ➕create event
                          </Button>
                        </Link>
                      </Grid>
                    )}
                    <Grid item xs>
                      <Link to='/yourEvent'>
                        {' '}
                        <Button
                          color='inherit'
                          className={classes.button}
                          disableElevation
                        >
                          📅 Your events
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Button
                        disableElevation
                        color='inherit'
                        className={classes.button}
                        onClick={startLogOut}
                      >
                        🚪 Logout
                      </Button>
                    </Grid>
                    <Grid item m style={{ paddingleft: '2px' }}>
                      <Link to='/profile'>
                        <Avatar alt='Remy Sharp' src='' />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

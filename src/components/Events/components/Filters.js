import React from 'react';
import { makeStyles, Grid, TextField } from '@material-ui/core';
import Selector from './Selector';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '8px',
  },
  expand: {
    // maxWidth: 34,
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  cover: {
    width: 151,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  content: {
    flex: '1 0 auto',
  },
}));
export const Filters = ({ searchItem, setSearchItem }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        // className={classes.margin}
        container
        justify='space-between'
      >
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
        <Grid item>
          <Grid container>
            <Grid item>
              <form
                className={`${classes.container} ${classes.date}`}
                noValidate
              >
                <TextField
                  id='date'
                  label='Start Date'
                  type='date'
                  defaultValue='2017-05-24'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item>
              <form
                className={`${classes.container} ${classes.date}`}
                noValidate
              >
                <TextField
                  id='date'
                  label='End Date'
                  type='date'
                  defaultValue='2017-05-24'
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
    </div>
  );
};

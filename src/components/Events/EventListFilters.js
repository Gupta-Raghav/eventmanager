import React, { useState, useEffect, createContext, useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Selector from './components/Selector';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import eventsFilter from '../../Selectors/events';
import {
  setTextFilter,
  sortByDate,
  setStartDate,
  setEndDate,
  setType,
} from '../../actions/filters';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Grid,
  InputLabel,
  TextField,
  InputAdornment,
  FormControl,
  FilledInput,
} from '@material-ui/core';

const EventsListFilters = () => {
  // const [filters, setFilters] = useState([]);
  const classes = useStyles();
  const user = useContext(UserContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const filters = useSelector((state) => state.filters);
  const events = useSelector((state) => state.events);
  const titles = events.map((e) => e.title);
  const [searchClub, setSearchClub] = useState('');
  const [searchType, setSearchType] = useState('');
  const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  const [endDate, setEndDate] = useState(new Date('2014-08-18T21:11:54'));
  const [type, settype] = useState('');
  // const filteredEvents = eventsFilter(
  //   events,
  //   searchClub,
  //   searchType,
  //   'date',
  //   startDate,
  //   endDate
  // );

  const onStartDateChange = (startDate) => {
    setStartDate(startDate);
  };
  const onEndDateChange = (endDate) => {
    setEndDate(endDate);
  };
  return (
    <div>
      <Grid item>
        <FormControl
          fullWidth
          // className={classes.margin}
          // variant='outlined'
          variant='filled'
        >
          <InputLabel htmlFor='filled-adornment-amount'>Search</InputLabel>
          {/* <OutlinedInput */}
          <FilledInput
            id='filled-adornment-amount'
            value={filters.text}
            placeholder='Fests, Events, Organizations...'
            onChange={(e) => dispatch(setTextFilter(e.target.value))}
            startAdornment={<InputAdornment position='start'>:</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </Grid>
      {/* <Filters /> */}
      <Grid
        // className={classes.margin}
        container
        justify='space-between'
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <Selector
                searchItem={searchClub}
                setSearchItem={setSearchClub}
                list={['ACM', 'IEEE', 'TMC']}
                placeholder='Club'
              />
            </Grid>
            <Grid item>
              <Selector
                searchItem={searchType}
                setSearchItem={setSearchType}
                list={['Technical', 'Department', 'Curricular', 'Social']}
                placeholder='Type'
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
                  value={filters.startDate}
                  onChange={(e) => onStartDateChange(e)}
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
                  value={filters.endDate}
                  onChange={(e) => onEndDateChange(e)}
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
export default EventsListFilters;

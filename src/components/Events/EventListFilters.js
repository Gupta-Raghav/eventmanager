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
import { DateRangePicker } from 'react-dates';
import {
  Grid,
  InputLabel,
  TextField,
  InputAdornment,
  FormControl,
  FilledInput,
} from '@material-ui/core';
import { makeStyles, Select } from '@material-ui/core';
const EventsListFilters = () => {
  // const [filters, setFilters] = useState([]);
  const classes = useStyles();
  const user = useContext(UserContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const filters = useSelector((state) => state.filters);
  console.log(filters.type);
  const events = useSelector((state) => state.events);
  const titles = events.map((e) => e.title);
  // const [searchItem, setSearchItem] = useState('');
  // const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  // const [endDate, setEndDate] = useState(new Date('2014-08-18T21:11:54'));
  const [searchClub, setSearchClub] = useState('');
  const [searchtype, setSearchType] = useState('');
  const [type, settype] = useState('');
  const [startDate, setstartDate] = useState(filters.startDate);
  const [endDate, setendDate] = useState(filters.endDate);
  const [focusedInput, setFocusedinput] = useState(true);
  const filteredEvents = eventsFilter(
    events,
    searchtype,
    'date'
    // startDate,
    // endDate
  );
  const onStartDateChange = ({ startDate }) => {
    dispatch(setStartDate(startDate));
  };
  const onEndDateChange = (endDate) => {
    setEndDate(endDate);
  };
  const onTypeSelect = (e) => {
    setType(e.target.value);
  };
  const types = ['Technical', 'Cultural', 'Department', 'curricular', 'social'];
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
                list={filters}
                placeholder='Club'
              />
            </Grid>
            <Grid item>
              <Selector
                Value={filters.type}
                searchItem={searchtype}
                setSearchItem={setSearchType}
                placeholder='Type'
              />
              {/* <Select
                   value={type}
                   onChange={onTypeSelect}
                      >
                    {types.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
      </Select> */}
              {/* <Selector
                      // TODO: set-up separate states for separate selectors
                      searchItem={searchtype}
                      Typevalue= {filters.type}
                      onChange={(e)=> dispatch(setType(e.target.value))}
                      setSearchItem={setSearchType}
                      labelWidth={20}
                    >
                      
                      </Selector> */}
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
                {/* <DateRangePicker
                        startDate={filters.startDate} 
                        endDate={filters.endDate}
                        onDatesChange={onDatesChange} 
                        focusedInput={focusedInput} 
                        onFocusChange={onFocusChange} 
                      /> */}
                <TextField
                  id='date'
                  label='Start Date'
                  type='date'
                  defaultValue='2017-05-24'
                  className={classes.textField}
                  value={filters.startDate}
                  onChange={onStartDateChange}
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
                  onChange={onEndDateChange}
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

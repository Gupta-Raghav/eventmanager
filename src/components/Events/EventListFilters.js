import React, { useState, useEffect, createContext, useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Selector from './components/Selector';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import eventsFilter from '../../Selectors/events';
<<<<<<< Updated upstream
=======
import {setTextFilter, sortByDate, setStartDate, setEndDate,setType} from '../../actions/filters'
import MenuItem from '@material-ui/core/MenuItem';
>>>>>>> Stashed changes
import {
  setTextFilter,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
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
  // const [searchItem, setSearchItem] = useState('');
  // const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  // const [endDate, setEndDate] = useState(new Date('2014-08-18T21:11:54'));
  const [searchItem, setSearchItem] = useState('');
  const [type, settype] = useState('');
  const filteredEvents = eventsFilter(
    events,
    searchItem,
    'date'
    // startDate,
    // endDate
  );
<<<<<<< Updated upstream

  const onStartDateChange = ({ startDate }) => {
    dispatch(setStartDate(startDate));
  };
  const onEndDateChange = ({ endDate }) => {
    dispatch(setEndDate(endDate));
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
                searchItem={searchItem}
                setSearchItem={setSearchItem}
                list={filters}
                placeholder='Club'
              />
            </Grid>
            <Grid item>
              <Selector
                // TODO: set-up separate states for separate selectors
                searchItem={searchItem}
                setSearchItem={setSearchItem}
                list={['ACM', 'IEEE', 'TMC']}
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
=======
  
  
    const onStartDateChange =({startDate}) =>{
      dispatch(setStartDate(startDate));
    }
    const onEndDateChange =({endDate}) => {
      dispatch(setEndDate(endDate))
    }
    const types = ['Technical', 'Cultural', 'Department','curricular', 'social'];
    return (
        <div>
             <Grid item>
              <FormControl
                fullWidth
                // className={classes.margin}
                // variant='outlined'
                variant='filled'
>>>>>>> Stashed changes
              >
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
<<<<<<< Updated upstream
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
=======
            {/* <Filters /> */}
            <Grid
              // className={classes.margin}
              container
              justify='space-between'
            >
              <Grid item>
                <Grid container>
                  <Grid item>
                  <InputLabel id="demo-mutiple-name-label">Club </InputLabel>
                    <Select
                      searchItem={searchItem}
                      list={filters}
                      placeholder='Club'
                    />
                  </Grid>
                  <Grid item>
                  <InputLabel id="demo-mutiple-name-label">Type</InputLabel>
                    
                    <Select
                      // TODO: set-up separate states for separate selectors
                      searchItem={searchItem}
                      value= {filters.type}
                      onChange={(e)=> dispatch(setType(e.target.value))}
                      setSearchItem={setSearchItem}
                      labelWidth={20}
                    >
                      {types.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                      </Select>
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
                        value ={filters.startDate}
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
                        value ={filters.endDate}
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
    )
}
>>>>>>> Stashed changes
export default EventsListFilters;

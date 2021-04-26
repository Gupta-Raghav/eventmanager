import React, { useState, useEffect, createContext, useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { useDispatch, useSelector  } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Selector from './components/Selector';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import eventsFilter from '../../Selectors/events';
import {setTextFilter, sortByDate, setStartDate, setEndDate} from '../../actions/filters'
import {
  makeStyles,
  Select,
  Button,
  Modal,
  Backdrop,
  Fade,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  InputLabel,
  Paper,
  AppBar,
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  InputAdornment,
  FormControl,
  OutlinedInput,
  Toolbar,
  FilledInput,
} from '@material-ui/core';

const EventsListFilters = () => {
    // const [filters, setFilters] = useState([]);
  const classes = useStyles();
  const user = useContext(UserContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const filters = useSelector(state => state.filters);
  const events = useSelector(state => state.events)
  const titles = events.map((e) => e.title);
  // const [searchItem, setSearchItem] = useState('');
  // const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  // const [endDate, setEndDate] = useState(new Date('2014-08-18T21:11:54'));
  const [searchItem, setSearchItem] = useState('');
  const filteredEvents = eventsFilter(
    events,
    searchItem,
    'date',
    // startDate,
    // endDate
  );
  
    const onStartDateChange =({startDate}) =>{
      dispatch(setStartDate(startDate));
    }
    const onEndDateChange =({endDate}) => {
      dispatch(setEndDate(endDate))
    }
    return (
        <div>
             <Grid item>
              <FormControl
                fullWidth
                // className={classes.margin}
                // variant='outlined'
                variant='filled'
              >
                <InputLabel htmlFor='filled-adornment-amount'>
                  Search
                </InputLabel>
                {/* <OutlinedInput */}
                <FilledInput
                  id='filled-adornment-amount'
                  value={filters.text}
                  placeholder='Fests, Events, Organizations...'
                  onChange={(e) => dispatch(setTextFilter(e.target.value))}
                  startAdornment={
                    <InputAdornment position='start'>:</InputAdornment>
                  }
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
export default EventsListFilters;

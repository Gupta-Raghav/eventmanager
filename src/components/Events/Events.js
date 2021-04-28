import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Selector from './components/Selector';
import Selectevent from '../../Selectors/events';
// import DateFnsUtils from '@date-io';
// import { EventCard } from './components/EventCard';
import EventCard from './components/EventCard';
import useIsMobile from '../../hooks/useIsMobile';
import { Filters } from './components/Filters';
import {
  Dialog,
  AppBar,
  Slide,
  Toolbar,
  makeStyles,
  GridList,
  IconButton,
  GridListTile,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { db } from '../../firebase';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import Navbar from '../navbar/Navbar';
import './Events.css';
import { UserContext } from '../providers/UserProvider';
import AppState from '../../store/configureStore';
import { addEventToStore } from '../../actions/events';
import { useDispatch } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import eventsFilter from '../../Selectors/events';
import ExpenselistFilters from './EventListFilters';
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
  text: { color: '#95461E', fontFamily: 'Montserrat, sans-serif' },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
export default function Events() {
  // const user = useContext(UserContext);
  // const history = useHistory();
  // const [searchItem, setSearchItem] = useState('');
  const [filters, setFilters] = useState([]);
  const classes = useStyles();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const events = useSelector((state) =>
    Selectevent(state.events, state.filters)
  );
  const titles = events.map((e) => e.title);
  const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  const [endDate, setEndDate] = useState(new Date('2014-08-18T21:11:54'));
  const [searchItem, setSearchItem] = useState('');
  const filteredEvents = eventsFilter(
    events,
    searchItem,
    'date',
    startDate,
    endDate
  );
  // const filteredEvents = events.filter(ievent => {
  //   return ievent.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;
  // });
  const handleDateChange = (date) => {
    setStartDate(date);
  };
  const fetchFilters = async () => {
    const res = await db.collection(`Clubs/ACM/Events`).get();
    const documents = await db.collection(`Clubs/ACM/Events`).doc().id;
    res.docs.forEach((item) => {
      const event = item.data();
      if (event && !titles.includes(event.title)) {
        dispatch(addEventToStore(event));
      }
    });
  };
  useEffect(() => {
    fetchFilters();
  }, []);
  // callback for event sign up dialog
  const dialogCallback = useCallback((name, description) => {
    setDialog(true);
    setDialogContent({ name, description });
  }, []);
  const [dialog, setDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    name: 'Title',
    description: 'description',
  });
  return (
    // <MuiPickersUtilsProvider >\
    <div
      className='events'
      className={classes.eventsbg}
      style={{ color: '#010101' }}
    >
      <Dialog
        fullscreen
        open={dialog}
        onClose={() => {
          setDialog(false);
        }}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => {
                setDialog(false);
              }}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Register
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container direction='column'>
          <Grid item>
            <Typography>{dialogContent.name}</Typography>
          </Grid>
          <Grid item>
            <Typography>{dialogContent.description}</Typography>
          </Grid>
        </Grid>
      </Dialog>
      <Navbar />
      <Grid container justify='space-evenly'>
        <Grid item xs />
        <Grid item xs={9}>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <Typography className={classes.text}>
                <a href='/upcoming'>
                  <h2>Upcoming Events</h2>
                </a>
              </Typography>
            </Grid>
            <Divider />
            <Grid item style={{ textAlign: 'center', padding: '5em 0em' }}>
              <Typography>CAROUSEL </Typography>
            </Grid>
            <Divider />
            <Grid item />
            <ExpenselistFilters />
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
      <Grid container justify='space-evenly' style={{ paddingTop: '16px' }}>
        <Grid item xs />
        <Grid item xs={9}>
          <GridList cols={isMobile ? 1 : 3} cellHeight='auto' spacing={32}>
            {filteredEvents.map((event, index) => {
              return (
                <GridListTile>
                  <EventCard
                    name={event.title}
                    description={event.description}
                    dialogCallback={dialogCallback}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
    // </MuiPickersUtilsProvider>
  );
}

import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  Button,
  Typography,
  TextField,
  FormControl,
  Grid,
  makeStyles,
  Input,
  Checkbox,
  OutlinedInput,
  Radio,
  RadioGroup,
  FormLabel,
  Select,
  MenuItem,
  FormControlLabel,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import './form.css';
import hacks from '../../assets/hacks.jpeg';
import { startAddEvent } from '../../actions/events';
// import { NULL } from 'node-sass';

const useStyles = makeStyles(() => ({
  root: {},
  formPaper: {
    margin: '8px 16px',
    padding: '8px',
  },
  formContainer: {
    padding: '8px',
  },
  formFields: {
    padding: '0px 64px',
    margin: '0px 32px',
  },
  formControl: {
    marginTop: '8px',
  },
  fields: {
    marginTop: '8px',
  },
  fieldHeaders: {
    fontWeight: 500,
  },
}));
const CreateEventForm = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [amount, setamount] = useState(0);
  const [venue, setvenue] = useState('Old Audi');
  const [eventDate, seteventDate] = useState(moment());
  const [calendarfocused, setcalendarfocused] = useState(false);
  const [type, settype] = useState('Technical');
  const [poster, setposter] = useState(null);
  const [toggle, settoggle] = useState(false);
  const [sponsorToggle, setsponsorToggle] = useState(false);
  const [feeToggle, setFeeToggle] = useState(false);
  const [sponsorshipamount, setsponsorshipAmount] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  // todo: prize money; permissions
  const handleSubmit = () => {
    const formData = {
      title,
      description,
      amount,
      venue,
      eventDate,
      type,
      poster,
      toggle,
      sponsorToggle,
    };
    dispatch(startAddEvent(formData));
    history.push('/events');
  };
  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setdescription(description);
  };
  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^(?:[0-9]\d*)(?:\.(?!.*000)\d+)?$/)) {
      setamount(amount);
    }
  };
  const onSponsorshipAmountChange = (e) => {
    const sponsorshipamount = e.target.value;

    if (!sponsorshipamount || sponsorshipamount.match(/^(?:[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) {
      setsponsorshipAmount(sponsorshipamount);
    }
  };
  const onVenueChange = (e) => {
    const venue = e.target.value;
    setvenue(venue);
  };
  const onTypeChange = (e) => {
    const type = e.target.value;
    settype(type);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleonDateChange = (eventDate) => {
    if (eventDate) {
      seteventDate(eventDate.toString());
    }
  };
  const handleonFocusChange = ({ focused }) => {
    setcalendarfocused(focused);
  };
  const handeltoggle = () => {
    settoggle(!toggle);
  };
  const handelsponsorToggle = () => {
    setsponsorToggle(!sponsorToggle);
  };
  const handelFeeToggle = () => {
    setFeeToggle(!feeToggle);
  };
  return (
    <div>
      <Navbar />
      <Paper className={classes.formPaper} elevation='10'>
        <Typography
          variant='h4'
          className='heading'
          style={{ fontWeight: 500 }}
        >
          Create Event
        </Typography>
        <Grid
          container
          spacing={2}
          direction='row'
          justify='space-evenly'
          className={classes.formContainer}
        >
          <Grid item xs>
            <Grid container direction='column' className={classes.formFields}>
              <Grid item xs>
                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Typography variant='h5' className={classes.fieldHeaders}>
                    Event Name
                  </Typography>
                  <OutlinedInput
                    id='event-name'
                    placeholder='Event title'
                    value={title}
                    onChange={onTitleChange}
                    className={classes.fields}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Typography variant='h5' className={classes.fieldHeaders}>
                    Event Description
                  </Typography>
                  <OutlinedInput
                    id='event-description'
                    placeholder='Description'
                    value={description}
                    multiline
                    onChange={onDescriptionChange}
                    className={classes.fields}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Typography variant='h6' className={classes.fieldHeaders}>
                    Check the box if your event is paid
                  </Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={feeToggle}
                        onChange={handelFeeToggle}
                      />
                    }
                    label='paid event'
                  />
                </FormControl>
                {feeToggle && (
                  <>
                    <FormControl
                      fullWidth
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <Typography variant='h5' className={classes.fieldHeaders}>
                        Amount
                      </Typography>
                      <OutlinedInput
                        id='Event-amount'
                        placeholder='Registeration Fees'
                        value={amount}
                        onChange={onAmountChange}
                        className={classes.fields}
                      />
                    </FormControl>
                  </>
                )}
                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Typography variant='h5' className={classes.fieldHeaders}>
                    Type
                  </Typography>
                  <RadioGroup row aria-label='type' name='type'>
                    <FormControlLabel
                      value='Technical'
                      control={<Radio />}
                      label='Technical'
                      onChange={onTypeChange}
                    />
                    <FormControlLabel
                      value='cultural'
                      control={<Radio />}
                      label='Cultural'
                      onChange={onTypeChange}
                    />
                    <FormControlLabel
                      value='department'
                      control={<Radio />}
                      label='Department'
                      onChange={onTypeChange}
                    />
                    <FormControlLabel
                      value='curricular'
                      control={<Radio />}
                      label='curricular'
                      onChange={onTypeChange}
                    />
                    <FormControlLabel
                      value='social'
                      control={<Radio />}
                      label='Social'
                      onChange={onTypeChange}
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Typography variant='h5' className={classes.fieldHeaders}>
                    Timings
                  </Typography>
                  <Grid container direction='row'>
                    <Grid item xs>
                      <TextField
                        className={classes.fields}
                        id='start-date'
                        label='Start Date'
                        type='date'
                        defaultValue='01-01-2020'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        className={classes.fields}
                        id='end-date'
                        label='End Date'
                        type='date'
                        defaultValue='30-01-2020'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container direction='row' style={{ paddingTop: '8px' }}>
                    <Grid item xs>
                      <TextField
                        className={classes.fields}
                        id='start-time'
                        label='Start time'
                        type='time'
                        defaultValue='00:00'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        className={classes.fields}
                        id='end-time'
                        label='End time'
                        type='time'
                        defaultValue='23:59'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>
                </FormControl>

                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Typography variant='h5' className={classes.fieldHeaders}>
                    Event Venue
                  </Typography>
                  <Select
                    labelId='event-venue'
                    id='event-venue'
                    value={venue}
                    onChange={onVenueChange}
                  >
                    <MenuItem value='Old Audi'>Old Auditorium</MenuItem>
                    <MenuItem value='Sharda Pai'>Sharda Pai</MenuItem>
                    <MenuItem defaultValue='TMA Pai'>TMA Pai</MenuItem>
                    <MenuItem value='1AB hall'>1AB hall</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.formControl}
                >
                  <Typography variant='h6' className={classes.fieldHeaders}>
                    Sponsorship
                  </Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sponsorToggle}
                        onChange={handelsponsorToggle}
                      />
                    }
                    label='Sponsored'
                  />
                </FormControl>
                {sponsorToggle && (
                  <>
                    <FormControl
                      fullWidth
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <Typography variant='h5' className={classes.fieldHeaders}>
                        Sponsor's name
                      </Typography>
                      <OutlinedInput
                        id='sponsor-name'
                        placeholder='Name'
                        value={title}
                        onChange={onTitleChange}
                        className={classes.fields}
                      />
                    </FormControl>
                    <FormControl
                      fullWidth
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <Typography variant='h5' className={classes.fieldHeaders}>
                        Amount
                      </Typography>
                      <OutlinedInput
                        id='sponsor-amount'
                        placeholder='amount'
                        value={sponsorshipamount}
                        onChange={onSponsorshipAmountChange}
                        className={classes.fields}
                      />
                    </FormControl>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container direction='column' alignItems='center' spacing={2}>
              <Grid item style={{ padding: '8px 0px' }}>
                <Button>Upload image</Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction='column'
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dashed/image/upload/v1611051427/acm/klgjkuqdehb2g4buvprx.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                // paddingTop: '8px',
              }}
              alignItems='center'
              spacing={2}
            />
          </Grid>
        </Grid>
        <Grid container style={{ padding: '16px' }} spacing={2}>
          <Grid item xs>
            <Button
              onClick={handleSubmit}
              style={{
                padding: '16px 0px',
                alignSelf: 'center',
                width: '100%',
              }}
            >
              Create Event
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default CreateEventForm;

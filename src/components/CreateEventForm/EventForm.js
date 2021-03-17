import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import {Paper, Button,
Typography,TextField, FormControl, Grid, makeStyles,
Radio, RadioGroup, FormLabel, FormControlLabel} from '@material-ui/core';
import './form.css'
// import { NULL } from 'node-sass';

const useStyles = makeStyles(()=>({
  root:{}
}))
const CreateEventForm = () => {
  const classes = useStyles()
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [amount, setamount] = useState(0);
  const [venue, setvenue] = useState('TMA Pai');
  const [eventDate, seteventDate] = useState(moment());
  const [calendarfocused, setcalendarfocused] = useState(false);
  const [type, settype] = useState('Technical');
  const [poster, setposter] = useState(null );
  const [toggle, settoggle] = useState(false);
  const [sponsorToggle, setsponsorToggle] = useState(false)
  // todo: prize money; permissions
  const handleSubmit= () =>{
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
    }
    console.log(formData);
  }
  const onTitleChange = (e,title) => {
    title = e.target.value;
    setTitle(title);
  };
  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setdescription(description);
  };
  const onFeesChange = (e) => {
    const amount = e.target.value;
    
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setamount(amount);
    }
  };
  const onVenueChange = (e)=> {
   const venue = e.target.value;  
    setvenue(venue)
  };
  const onTypeChange = (e)=> {
    const type = e.target.value;  
     settype(type)
   };
  const handleOnSubmit=(e)=>{
    e.preventDefault();
  } 
  const handleonDateChange =(eventDate)=>{
      if(eventDate){
          seteventDate(eventDate);
      }  
}
const handleonFocusChange = ({focused} ) => {
    setcalendarfocused(focused);
  };
const handeltoggle= () =>{
  settoggle(!toggle);
}
const handelsponsorToggle= () =>{
  setsponsorToggle(!sponsorToggle);
}
  return (
    <div>
      <Navbar />
      <Typography variant='h4' className="heading">Create Event</Typography>
      <form onSubmit={handleOnSubmit}>
        <div>
        {/* <Grid container direction="row" justify='space-evenly' alignContent='center'>
        <Grid item>
          <Grid container direction='column' spacing={1}>
            <Grid item>
            <Typography>
              Event name
            </Typography>
              </Grid >
            <Grid item>
              </Grid >
          </Grid>
        </Grid>
        <Grid item>
          2
          </Grid>
        </Grid> */}
      <div class='form_left'>
      <div class="form" >
        <h2 class='label'>Event name</h2><input
          type='text'
          placeholder='Event Title'
          class="text-input"
          autoFocus
          value={title}
          onChange={onTitleChange}
        />
        <h2 class='label'>Event description</h2>
        <input
          type='text'
          placeholder='Description'
          class="text-area"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <h2 class="label">
           Choose the type of event
            </h2>
        <select value={type} onChange={onTypeChange} class="selector">
        <option defaultValue="Technical">Technical</option>
        <option value="Cultural">Cultural</option>
        <option value="Department">Department</option>
</select>
{/* <FormLabel component="legend" className='text-input'>Check the box if the event is paid</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value='1'className='text-input' onChange={()=>{}}>
        <FormControlLabel value="female" control={<Radio />} label="Check" />
      </RadioGroup> */}
      <br/>
        <div class="check">
        <h3>Check the box if the event is paid</h3>
       <input
          type="checkbox"
          onChange={handeltoggle}
          value={toggle}
        />
        </div>
        {toggle && (
          <div>  <h2 class='label'>Fees</h2>
          <input
          type='text'
          placeholder='fees'
          class="text-input"
          autoFocus
          value={amount}
          onChange={onFeesChange}
          />
          </div>
        )}
        <div class="date-time">
        <h2 class='label'>Event Start Date</h2>
        <h2 class='label'>Event End Date</h2>
        <h2 class="label">Start Time</h2>
        <h2 class="label">End Time</h2>
        </div>
    <div class="date-time">
         <TextField
                        id='date'
                        label='Event Start Date'
                        type='date'
                        defaultValue='2017-05-24'
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
         <TextField
                        id='date'
                        label='Event End Date'
                        type='date'
                        defaultValue='2017-05-24'
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
<TextField
    id="time"
    label="start time"
    type="time"
    defaultValue="07:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
<TextField
    id="time"
    label="end time"
    type="time"
    defaultValue="07:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
    {/* <SingleDatePicker
          date={eventDate}
          onDateChange={handleonDateChange}
          focused={calendarfocused}
          onFocusChange={handleonFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        /> */}
    </div>
        
        
        <h2 class="label">
            Pick the available venue for the event
            </h2>
        <select value={venue} onChange={onVenueChange} class="selector">
  <option value="Old Audi">Old Auditorium</option>
  <option value="Sharda Pai">Sharda Pai</option>
  <option defaultValue="TMA Pai">TMA Pai</option>
  <option value="1AB hall">1AB hall</option>
</select>
<br></br>
<div class="check">
        <h3>Do you have a Sponsor for the event</h3>
       <input
          type="checkbox"
          onChange={handelsponsorToggle}
          value={sponsorToggle}
        />
{sponsorToggle && (
          <div>  
            <br/>
            <h2 class='label'>Sponsor Details</h2>
          <input
          type='text'
          placeholder='Sponsor Name'
          class="text-input"
          autoFocus
          value={amount}
      
          />
          </div>
        )}
        </div>
      </div>
      </div>
      <div class="upload">
      <h2 class="label">
    Upload the poster of your event
    </h2>
    <input type="file" class="img_upload" />
</div>
</div>
</form>
<Button onClick={handleSubmit} style={{padding: '1em', margin: '1em'}}>Brrrr</Button>
    </div>
  );
};
export default CreateEventForm;

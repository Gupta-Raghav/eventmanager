import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import './form.css'
const CreateEventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [amount, setamount] = useState(0);
  const [venue, setvenue] = useState('TMA Pai');
  const [eventDate, seteventDate] = useState(moment());
  const [calendarfocused, setcalendarfocused] = useState(false);
  const onTitleChange = (e) => {
    const title = e.target.value;
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
    venue = e.target.value;  
    setvenue(venue)
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
    setcalendarfocused(()=>({calendarfocused:focused}));
  };
  return (
    <div>
      <Navbar />
      <h1 class="heading">Create Event</h1>
      <div class='form_left'>
      <form class="form" onSubmit={handleOnSubmit}>
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
          value={title}
          onChange={onDescriptionChange}
        />
        <h2 class='label'>Fees</h2>
        <input
        type='number'
        placeholder='fees'
        label="Fees"
        class="text-input"
        autoFocus
        value={amount}
        onChange={onFeesChange}
        />
        <h2 class='label'>Event Date</h2>
        <SingleDatePicker
          date={eventDate}
          onDateChange={handleonDateChange}
          focused={calendarfocused}
          onFocusChange={handleonFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        
        <h2 class="label">
            Pick the available venue for the event
        <br/><select value={venue} onChange={onVenueChange}>
  <option value="Old Audi">Old Auditorium</option>
  <option value="Sharda Pai">Sharda Pai</option>
  <option defaultValue="TMA Pai">TMA Pai</option>
  <option value="1AB hall">1AB hall</option>
</select>
</h2>

        {/* <input
        type='text'
        placeholder='Venue'
        autoFocus
        value={title}
        onChange={onVenueChange}
        />
        <input
        type='text'
        placeholder='Tags'
        autoFocus
        value={title}
        onChange={onTagsChange}
        /> */}

      </form>
      </div>
      <div class="upload">
      <h2 class="label">
    Upload the poster of your event
    </h2>
    <input type="file" class="img_upload" />
</div>
    </div>
  );
};
export default CreateEventForm;

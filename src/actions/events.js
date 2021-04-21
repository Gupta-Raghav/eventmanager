import recat from 'react';
import database from '../firebase';
import { db } from '../firebase';
import events from '../Selectors/events';
// import {Dispatch} from 'redux';
import eventReducer from '../Reducers/events';
// import {useReducer}
// import

//ADD EVENT
export const addEvent = (event) => ({
  type: 'ADD_EVENT',
  event,
});
export const addEventToStore = (eventData = {}) => (dispatch, getState) => {
  try {
    console.log(eventData);
    dispatch(
      addEvent(
        {
          ...eventData,
        },
        dispatch
      )
    );
  } catch (err) {
    console.log(err);
  }
};
export const startAddEvent = (eventData = {}) => (dispatch, getState) => {
  try {
    const {
      title = '',
      description = '',
      sponsor = '',
      fees = 0,
      eventDate = '',
      eventEndDate = '',
      category = '',
      venue = '',
      prizeMoney = 0,
      FCPermission = false,
      DSWPermission = false,
    } = eventData;
    // const event = {name, description,fees,eventDate,venue,eventEndDate,prizeMoney,FCPermission,DSWPermission};
    const event = {
      title,
      description,
      fees,
      category,
      venue,
      prizeMoney,
      FCPermission,
      DSWPermission,
    };
    return db
      .collection(`Clubs/ACM/Events`)
      .doc(title)
      .set(event)
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

// EDIT_event
export const editevent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates,
});
export const startEditevent = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/events/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editevent(id, updates));
      });
  };
};

// SET_EVENTS
export const setevents = (events) => ({
  type: 'SET_EVENTS',
  events,
});

export const startSetevents = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/events`)
      .once('value')
      .then((snapshot) => {
        const events = [];

        snapshot.forEach((childSnapshot) => {
          events.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setevents(events));
      });
  };
};

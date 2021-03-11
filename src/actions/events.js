import database from '../firebase';

//ADD EVENT
export const addEvent = (event) => ({
    type : 'ADD_EVENT',
    event    
})

export const startAddEvent = (eventData={}) =>{
    return(dispatch,getState)=> {
        const uid = getState().auth.uid;
        const{
            name ='',
            description='',
            amount = 0,
            eventDate = 0,
            venue =''
        } = eventData;
        const event = {name, description,amount,eventDate,venue};

        return database.ref(`users/${uid}/events`).push(event).then((ref)=>{
            dispatch(addevent({
                id :ref.key,
                ...event
            }))
        })
    }
}

// EDIT_event
export const editevent = (id, updates) => ({
    type: 'EDIT_EVENT',
    id,
    updates 
  });
  export const startEditevent = (id,updates)=>{
    return(dispatch,getState)=>{
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/events/${id}`).update(updates).then(()=>{
        dispatch(editevent(id,updates));
      })
    }
  }
  
  // SET_EVENTS
  export const setevents = (events) => ({
    type: 'SET_EVENTS',
    events
  });
  
  export const startSetevents = () => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/events`).once('value').then((snapshot) => {
        const events = [];
  
        snapshot.forEach((childSnapshot) => {
          events.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setevents(events));
      });
    };
  };
  
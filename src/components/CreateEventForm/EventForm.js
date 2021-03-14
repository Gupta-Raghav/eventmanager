import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'


const CreateEventForm = () => {
    const [title, setTitle] = useState('')
    const onTitleChange=(e) => {
        title = e.target.value;
        setTitle(title);
    }
    return (
        <div>
            <Navbar />
            <form >
            <input
            type='text'
            placeholder='Event Title'
            autoFocus
            value={title}
            onChange={onTitleChange}
            />
            <input
            type='text'
            placeholder='Event Title'
            autoFocus
            value={title}
            onChange={onTitleChange}
            />
            </form>
        </div> 
    )
}
export default CreateEventForm;
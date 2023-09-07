import { useSelector , useDispatch } from 'react-redux';
import React, { useState } from 'react';

function NewAirline() {
    const reduxStore = useSelector(store => store)
    const dispatch = useDispatch();
    const airlines = useSelector(store => store.airlines);
    const [newAirline, setNewAirline] = useState('');
    const [fleet, setFleet] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        const dataObj = {
            airline: newAirline,
            fleet: fleet
        };

        dispatch({type: 'ADDAIRLINE', payload: dataObj});
        setNewAirline('');
        setFleet(0);
      }

    return (
        
        <form onSubmit={handleSubmit}> 
      <input 
      type='text'
      value={newAirline}
      placeholder='Airline Name' 
      onChange={(event) => setNewAirline(event.target.value)}
      />
      <input
        type='number'
        value={fleet}
        onChange={(event) => setFleet(event.target.value)} 
        />
      <button type="submit">Add Airline</button>
      </form>
    )
}

export default NewAirline;
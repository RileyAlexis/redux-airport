import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';

import NewAirLine from '../NewAirline/NewAirline';
import DisplayAirlines from '../DisplayAirlines/DisplayAirlines';

function App() {

  const reduxStore = useSelector(store => store)
    const dispatch = useDispatch();
    const airlines = useSelector(store => store.airlines);

  return (
    <div>
      <h1>Redux Airport</h1>
      <NewAirLine />
      <DisplayAirlines />
    </div>
  );
}

export default App;

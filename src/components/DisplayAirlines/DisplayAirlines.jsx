import { useSelector , useDispatch } from 'react-redux';
import React, { useState } from 'react';



function DisplayAirlines() {

    const reduxStore = useSelector(store => store)
    const dispatch = useDispatch();
    const airlines = useSelector(store => store.airlines);

    return (
        <table>
        <tr>
          <th>Airlines:</th>
          <th>Fleet</th>
        </tr>
       {console.log(airlines)}
          {airlines.map(item => (
            <tr key={item.airline}>
                <td>{item.airline}</td>
                <td>{item.fleet}</td>
            </tr>  
          ))}
         
      </table>
    )
}

export default DisplayAirlines;
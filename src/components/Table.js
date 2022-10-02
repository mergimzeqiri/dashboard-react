
import React from 'react';
import './Table.css'
const data = [
  { name: "Lewis Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
  { name: "Lewis Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
  { name: "Lewis Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
  { name: "Lewis Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
]
  
function Table() {
  return (
      <table className='tableHeader'>
        <tr>
          <th>Name</th>
          <th>Nationality</th>
          <th>Team</th>
          <th>Points</th>
        </tr>
        <hr/>
        {data.map((val, key) => {
          return ( 
              <tr>
                <td>{val.name}</td>
                <td>{val.Nationality}</td>
                <td>{val.team}</td>
                <td>{val.points}</td>
              </tr>
            
          )

        })}
      </table>
  );
}
  
export default Table;

import React from 'react';
import './Table.scss'
import Button  from './Button';
  
function Table({data,button}) {
  return (
      <table className='tableHeader'>
        <tr>
          <th>Name</th>
          <th>Nationality</th>
          <th>Team</th>
          <th>Points</th>
        </tr>
        <hr/>
        {data.map((val) => {
          return ( 
              !button?    <tr>
                <td>{val.name}</td>
                <td>{val.Nationality}</td>
                <td>{val.team}</td>
                <td>{val.points}</td>
              </tr>:<tr>
                <td>{val.name}</td>
                <td>{val.Nationality}</td>
                <td>{val.team}</td>
                <td>{val.points}</td>
                <td><Button/></td>
                </tr>
           
            
          )

        })}
      </table>
  );
}
  
export default Table;

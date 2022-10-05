import './Table.scss'
import Button  from './Button';
import React from 'react';

interface DataProps {
  name?:string
  Nationality?:string
  team?:string
  points?:number
}
interface Props {
  data:DataProps[],
  button:boolean
}
function Table(props:Props) {
  const {data,button}=props;
  return (
      <table className='tableHeader'>
        <tr>
          <th>Name</th>
          <th>Nationality</th>
          <th>Team</th>
          <th>Points</th>
        </tr>
        <hr/>
        {data.map((val:DataProps) => {
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

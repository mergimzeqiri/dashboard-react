import React from 'react';
import './ChampionInfo.scss'
import {useParams} from 'react-router-dom'
import Table from '../components/Table'
import Button from '../components/Button';


export default function ChampionInfo() {
    let {id}= useParams();
    const data1 = [
      { name: "Lewis Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
    ]
    const data2 = [
      { name: "albi Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
      { name: "Lewis Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
      { name: "Lewis Hamilton", points: 19, Nationality: "Albanian", team:"bmw"},
    ]
    const data3 = [
      { name: "albi Hamilton", points: 19, },
      { name: "Lewis Hamilton", points: 19,},
      { name: "Lewis Hamilton", points: 19, },
      { name: "Lewis Hamilton", points: 19, },
    ]
  return (
    <div className='Wrapper'>
        <div className='firstWrapper'>
            <div className='Wrapper-Year'>{id}</div>
            <div className='Title'> Champion</div>
            <div className='Wrapper-Champion'><Table data={data1} button={false}/><Button/></div>
        </div>
         <div className='secondWrapper'>
            <div className='winnerTitle'>Winners</div>
            <div className='winnerTable'><Table data={data2}  button={true}/></div>
         </div>
    </div>
  )
}

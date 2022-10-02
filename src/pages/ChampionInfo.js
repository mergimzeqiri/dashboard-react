import React from 'react'
import './ChampionInfo.css'
import {useParams} from 'react-router-dom'
import Table from '../components/Table';
import Button from '../components/Button';


export default function ChampionInfo() {
    let {id}= useParams();
  return (
    <div className='Wrapper'>
        <div className='firstWrapper'>
            <div className='Wrapper-Year'>{id}</div>
            <div className='Title'> Champion</div>
            <div className='Wrapper-Champion'><Table/><Button/></div>
        </div>
         <div className='secondWrapper'>
            <div className='winnerTitle'>Winners</div>
            <div className='winnerTable'><Table/><Button/></div>
         </div>
    </div>
  )
}

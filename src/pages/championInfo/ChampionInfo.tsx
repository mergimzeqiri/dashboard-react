import React from 'react';
import './ChampionInfo.scss'
import {useParams} from 'react-router-dom'
import Table from '../../components/table/Table'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function ChampionInfo() {
    let {id}= useParams();

  
    const url =`http://ergast.com/api/f1/${id}/driverStandings.json?limit=4`
   
    const driverApi= async ()=>{
        const response= await axios.get(url);
        return response.data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings
    }

    const { isLoading, data} = useQuery(
      ["driver-api",id],driverApi
    );
    
 const rowName=data?.map((item)=>{
  return {
    name:item.Driver.givenName + " " + item.Driver.familyName,
    Nationality:item.Driver.nationality,
    team:item.Constructors[0].name,
    points:item.points,
    position:item.position,
    id:item.Driver.driverId
 }
 })
 const rowName1 = rowName?.filter(item => item.position === "1");

 const rowName2 =rowName?.filter(item => item.position >"1")
  console.log(rowName)

  return (
    <div className='Wrapper'>
        <div className='firstWrapper'>
          {isLoading? <p className='isLoading'>The page is loading , Please Wait..</p>:
          <> <div className='Wrapper-Year'>{id}</div>
            <div className='Title'> Champion</div>
            <div className='Wrapper-Champion'>{data && <><Table data={rowName1} button={false}/></>}</div></>}
           
        </div>
         <div className='secondWrapper'>
            {isLoading? <p className='isLoading'>The page is loading , Please Wait..</p>: 
            <><div className='winnerTitle'>Winners</div><div className='winnerTable'>{data && <><Table data={rowName2} button={true} /></>}</div></>}
         </div>
    </div>
  )
}

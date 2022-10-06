import React from 'react'
import Button from '../../components/button/Button'
import '../driverinfo/DriverInfo.scss'
import ChamionPic from '../../assets/lewis-hamilton-mercedes-1.jpeg'
import HelmetPic from '../../assets/helmet.jpeg'
import BritishFlag from '../../assets/britishFlag.png'
import DriverInfoTable from '../../components/driverInfoTable/DriverInfoTable'



export default function DriverInfo() {
  const data =[
    {team:'mercedes', country:'KOSOVA', podiums:100,points: 20,
  grandPrixEnter:109, worldChampionship:6, highestRace:1, highestGrid:1, DOB:'01/01/1998', POB:'KOSOVA'}
  ]
  return (
    <div className='DriverInfoWrapper'>
        
        <div className='leftWrapper'>
        <div className='exitButton'>
        <Button  leftIcon={true}/>
        </div>
          <h4 className='wrapperYear'>2011</h4>
           <h2 className='wrapperTitle'>Champion</h2>
            <img  className='championPic' src={ChamionPic}/>
              <div className='nameAndNumber'>
                  <h1 className='championNumber'>44</h1>
                  <h1 className='championName'>Lewis Hamilton</h1>
                  <img className='Flag' src={BritishFlag}/>
               </div>
            <img className='helmetPic' src={HelmetPic}/>
        </div>

        <div className='rightWrapper'><DriverInfoTable data={data}/>
        </div>
    </div>
  )
}

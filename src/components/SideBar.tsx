
import  '../components/Sidebar.scss'
import { NavLink} from 'react-router-dom'
import F1Logo from '../assets/f1logo.png'
import React from 'react';

export default function sideBar() {
    const years=[2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]
  return (
    <div  className='sidebar'>
        <div className='logo-header'>
         <img  className ='f1Logo'src={F1Logo}></img>
        </div>
     <div className='years-title'>YEARS</div>
     <ul className='Years-Layout'>{years.map((item) =>{
        return<li className='years-content'>
            <NavLink
             to={`/year/${item}`}
             className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
               {item} 
</NavLink>
            </li>
        
     })}</ul>
    </div>
  )

}

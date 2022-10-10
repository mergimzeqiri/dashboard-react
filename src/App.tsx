import './App.scss';
import SideBar from './components/sidebar/SideBar'
import{Routes,Route, Navigate} from 'react-router-dom'
import ChampionInfo from './pages/championInfo/ChampionInfo';
import React from 'react';
import DriverInfo from './pages/driverinfo/DriverInfo';


function App() {
  return (
    <div className="App">
     <div className="App-wrapper">
     <SideBar/>
     <Routes>
      <Route path="/" element={<Navigate to="/year/2009" />} />
      <Route path={`/year/:id`} element={ <ChampionInfo/>}/>
      <Route path={'/year/:id/driver/:driverId'} element={<DriverInfo/>}/>
     </Routes>
    
     </div>
    </div>
  );
}
export default App;

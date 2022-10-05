import './App.scss';

import SideBar from './components/SideBar'
import{Routes,Route, Navigate} from 'react-router-dom'
import ChampionInfo from './pages/ChampionInfo';
import React from 'react';

function App() {
  return (
    <div className="App">
     <div className="App-wrapper">
     <SideBar/>
     <Routes>
      <Route path="/" element={<Navigate to="/year/2009" />} />
      <Route path={`/year/:id`} element={ <ChampionInfo/>}/>
     </Routes>
    
     </div>
    </div>
  );
}
export default App;

import './App.css';
import SideBar from '../src/components/SideBar'
import{Routes,Route} from 'react-router-dom'
import ChampionInfo from './pages/ChampionInfo';

function App() {
  return (
    <div className="App">
     <div className="App-wrapper">
     <SideBar/>
     <Routes>
      <Route path={`/year/:id`} element={ <ChampionInfo/>}/>
     </Routes>
    
     </div>
    </div>
  );
}

export default App;

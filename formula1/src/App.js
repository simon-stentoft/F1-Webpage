import { Routes, Route, Link } from 'react-router-dom';
import DriverList from "./components/DriverList";
import ResultList from "./components/ResultList";
import Home from "./components/Home";
import RaceSchedule from './components/RaceSchedule';
import DriverStandings from './components/DriverStandingList';


function App() {
  return (
    <div>
      <div>
        <nav className="navbar text-bg-dark">
           <div className="container">
            <a href='/' className='navbar-brand fw-bold'>Formula1</a>
             <Link to='/driverlist' className="nav-item nav-link active" aria-current="page">Driver list</Link>
             <Link to='/recentresultlist' className="nav-item nav-link active" aria-current="page">Most recent race results</Link>
             <Link to='/raceschedule' className="nav-item nav-link active" aria-current="page">Current season race schedule</Link>
             <Link to='/driverstandings' className="nav-item nav-link active" aria-current="page">Driver standings</Link>
           </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/driverlist' element={<DriverList/>}/>
        <Route path='/recentresultlist' element={<ResultList/>}/>
        <Route path='/raceschedule' element={<RaceSchedule/>}/>
        <Route path='/driverstandings' element={<DriverStandings/>}/>
      </Routes>
    </div>
  )
}
export default App;
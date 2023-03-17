import { Routes, Route, Link } from 'react-router-dom';
import DriverList from "./components/DriverList";
import ResultList from "./components/ResultList";
import Home from "./components/Home";

/*function App() {
  return (
    <div>
      <h1 className="title is-2">Formula 1</h1>
      <div>
        {<ResultList/>}
      </div>
    </div>
  );
}
export default App;*/

function App() {
  return (
    <div>
      <div>
        <div className="navbar">
          <nav className="nav navbar">
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/driverlist' className="nav-item nav-link">Driver list</Link>
            <Link to='/recentresultlist' className="nav-item nav-link">Most recent race results</Link>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/driverlist' element={<DriverList/>}/>
        <Route path='/recentresultlist' element={<ResultList/>}/>
      </Routes>
    </div>
  )
}
export default App;
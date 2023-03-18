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
        <nav className="navbar text-bg-dark">
           <div className="container">
            <a href='#' className='navbar-brand text-bg-dark'>Formula1</a>
             <Link to='/' className="nav-item nav-link active" aria-current="page">Home</Link>
             <Link to='/driverlist' className="nav-item nav-link active" aria-current="page">Driver list</Link>
             <Link to='/recentresultlist' className="nav-item nav-link active" aria-current="page">Most recent race results</Link>
           </div>
        </nav>
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
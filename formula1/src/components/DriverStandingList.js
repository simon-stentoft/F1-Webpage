import { useFetchDriverStandingsQuery } from "../store/apis/ergastAPI";
import { useFetchFlexibleDriverStandingsQuery } from "../store/apis/ergastAPI";
import { useState } from "react";

function DriverStandings() {
    const { data, error, isLoading } = useFetchDriverStandingsQuery();
    const [searchSeason, setSearchSeason] = useState('')
    const { flexibleData, flexibleError, flexibleIsLoading } = useFetchFlexibleDriverStandingsQuery(searchSeason);
  
    if (isLoading) {
      return <div><h2 className="text-center">Loading..</h2></div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const driverStandings = data?.MRData?.StandingsTable?.StandingsLists?.[0].DriverStandings;
    const driverStandingsSeason = data?.MRData?.StandingsTable;
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      setSearchSeason(formData.get('season'));
    };

    return (
      <div className="container">
        <br/>
        <form onSubmit={handleSubmit} className="text-center">
          <input type="text" name="season" placeholder="Search..."/>
          <button type="submit">Search</button>
      </form>
        <br/>
        <h3 className="text-center">
          Season: {driverStandingsSeason.season}
        </h3>
       <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Points</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {driverStandings.map((driver) => (
            <tr key={driver.position}>
              <td>{driver.position}</td>
              <td>{driver.Driver.givenName} {driver.Driver.familyName}</td>
              <td>{driver.Constructors[0].name}</td>
              <td>{driver.points}</td>
              <td>{driver.wins}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
export default DriverStandings;
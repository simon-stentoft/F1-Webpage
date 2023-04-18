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

    //Makes a JSON file with the first three drivers in the season.
    const firstThreeDrivers = driverStandings.slice(0, 3).map((driver) => ({
      name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
      constructor: driver.Constructors[0].name,
      points: driver.points,
      wins: driver.wins
    }));
    //Converts the JSON file to a string.
    const json = JSON.stringify(firstThreeDrivers);
    
    //Creates a download link for the JSON file.
    const downloadJsonFile = () => {
      const element = document.createElement("a");
      const file = new Blob([json], { type: "application/json" });
      element.href = URL.createObjectURL(file);
      element.download = "first_three_drivers.json";
      document.body.appendChild(element);
      element.click();
    };

    return (
      <div className="container">
        <br/>
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
        <button onClick={downloadJsonFile} className="btn btn-primary mb-3">
        Download JSON File
      </button>
      </div>
    );
  }
export default DriverStandings;
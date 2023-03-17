import { useFetchResultQuery } from "../store/apis/ergastAPI";

function ResultList() {
    const { data, error, isLoading } = useFetchResultQuery();
  
    if (isLoading) {
      return <div>Loading..</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const raceResults = data.MRData.RaceTable.Races[0].Results;
  
    return (
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>No</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Laps</th>
            <th>Grid</th>
            <th>Time</th>
            <th>Status</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {raceResults.map((result) => (
            <tr key={result.position}>
              <td>{result.position}</td>
              <td>{result.number}</td>
              <td>{result.Driver.givenName} {result.Driver.familyName}</td>
              <td>{result.Constructor.name}</td>
              <td>{result.laps}</td>
              <td>{result.grid}</td>
              <td>{result.Time?.time || '--:--:--'}</td>
              <td>{result.status}</td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
export default ResultList;
import { useFetchResultQuery } from "../store/apis/ergastAPI";

function ResultList() {
  const { data, error, isLoading } = useFetchResultQuery();

  if (isLoading) {
    return (
      <div>
        <h2 className="text-center">Loading..</h2>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const nameOfRace = data.MRData.RaceTable.Races[0];
  const raceResults = data.MRData.RaceTable.Races[0].Results;

  return (
    <div className="container">
      <br />
      <h3 className="text-center">{nameOfRace.raceName}</h3>
      <table className="table table-striped text-center">
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
        <tbody className="table-group-divider">
          {raceResults.map((result) => (
            <tr key={result.position}>
              <td>{result.position}</td>
              <td>{result.number}</td>
              <td>
                {result.Driver.givenName} {result.Driver.familyName}
              </td>
              <td>{result.Constructor.name}</td>
              <td>{result.laps}</td>
              <td>{result.grid}</td>
              <td>{result.Time?.time || "--:--:--"}</td>
              <td>{result.status}</td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ResultList;

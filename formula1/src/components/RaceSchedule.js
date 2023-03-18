import { useFetchRaceScheduleQuery } from "../store/apis/ergastAPI";

function RaceSchedule() {
    const { data, error, isLoading } = useFetchRaceScheduleQuery();
  
    if (isLoading) {
      return <div><h2 className="text-center">Loading..</h2></div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const raceSchedule = data.MRData.RaceTable.Races;
  
    return (
      <div className="container">
       <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Season</th>
            <th>Round</th>
            <th>Race name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Sprint</th>
            <th>Circuit</th>
            <th>Race ended</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {raceSchedule.map((race) => (
            <tr key={race.round}>
              <td>{race.season}</td>
              <td>{race.round}</td>
              <td>{race.raceName}</td>
              <td>{race.date}</td>
              <td>{race.time}</td>
              <td>{race.Sprint?.date || ' - '}</td>
              <td>{race.Circuit.circuitName}</td>
              <td>{new Date(race.date) < new Date() ? '✔' : ''}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
export default RaceSchedule;
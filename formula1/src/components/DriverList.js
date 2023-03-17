import { useFetchDriverQuery } from "../store";

const DriverList = () => {
    const { data, error, isLoading } = useFetchDriverQuery();
    
    if (isLoading) {
        return <div>Loading..</div>

    } else if (error) {
        return <div>Error displaying drivers: {error}</div>
        
    } else {
        return (
            <table>
            <thead>
              <tr>
                <th>Given Name</th>
                <th>Family Name</th>
                <th>Date of Birth</th>
                <th>Nationality</th>
              </tr>
            </thead>
            <tbody>
              {data?.MRData?.DriverTable?.Drivers.map((driver) => (
                <tr key={driver.driverId}>
                  <td>{driver.givenName}</td>
                  <td>{driver.familyName}</td>
                  <td>{driver.dateOfBirth}</td>
                  <td>{driver.nationality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
    }
}
export default DriverList;
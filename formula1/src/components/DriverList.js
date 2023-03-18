import { useFetchDriverQuery } from "../store";
import { useState } from "react";

const DriverList = () => {
  const { data, error, isLoading } = useFetchDriverQuery();
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(1);

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection * -1);
    } else {
      setSortColumn(columnName);
      setSortDirection(1);
    }
  };

  if (isLoading) {
    return <div><h2 className="text-center">Loading..</h2></div>;
  }

  if (error) {
    return <div>Error displaying drivers: {error}</div>;
  }

  //Sorts drivers based off which column header you click
  const sortedDrivers = [...data?.MRData?.DriverTable?.Drivers].sort((a, b) =>
    sortDirection *
    (a[sortColumn] < b[sortColumn] ? -1 : a[sortColumn] > b[sortColumn] ? 1 : 0)
  );

  return (
    <div className="container">
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th onClick={() => handleSort("givenName")}>Given Name</th>
            <th onClick={() => handleSort("familyName")}>Family Name</th>
            <th onClick={() => handleSort("dateOfBirth")}>Date of Birth</th>
            <th onClick={() => handleSort("nationality")}>Nationality</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {sortedDrivers.map((driver) => (
            <tr key={driver.driverId}>
              <td>{driver.givenName}</td>
              <td>{driver.familyName}</td>
              <td>{driver.dateOfBirth}</td>
              <td>{driver.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;
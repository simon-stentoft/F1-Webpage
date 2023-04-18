import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDriver } from "../store/favoriteDriversSlice";

const FavoriteDrivers = () => {
    const favoriteDrivers = useSelector((state) => state.favoriteDrivers);
    const [drivers, setDrivers] = useState([]);
  
    // Load JSON file and set state when component mounts
    useEffect(() => {
      fetch("http://localhost:3002/api/drivers")
        .then((response) => response.json())
        .then((data) => setDrivers(data.drivers));
    }, []);
  
    return (
      <div className="container">
        <h2 className="text-center">Favorite Drivers</h2>
        <br />
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Constructor</th>
              <th>Points</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {drivers.map((driver) => (
              <tr key={driver.name}>
                <td>{driver.name}</td>
                <td>{driver.constructor}</td>
                <td>{driver.points}</td>
                <td>{driver.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default FavoriteDrivers; 
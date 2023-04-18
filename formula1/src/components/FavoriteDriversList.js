import { useSelector, useDispatch } from 'react-redux';
import { removeDriver } from '../store/favoriteDriversSlice';

function FavoriteDriversList() {
    const dispatch = useDispatch();
    const drivers = useSelector(({drivers: {data, searchTerm}}) => {
      return data.filter((driver) => driver.name.toLowerCase().includes(searchTerm.toLowerCase()) );
    });
  
    const handleRemoveDriver = (driver) => {
        dispatch(removeDriver({id: driver.id}));
    }
   
  
  const renderedDrivers = drivers.map((driver) => {
    return (
      <div key={driver.id} className="text-center">
        <br/>
        <p>
          Name: <br/> {driver.name} <br/> Description: <br/>{driver.description}
        </p>
        <button className="btn btn-danger" onClick={() => handleRemoveDriver(driver) }>
          Delete
        </button>
      </div>
    )
  })
    return (
    <div className="">
      {renderedDrivers}
      <hr />
     </div>
    );
}

  
export default FavoriteDriversList;
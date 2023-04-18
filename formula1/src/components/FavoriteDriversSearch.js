import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store/favoriteDriversSlice';

function FavoriteDriversSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.drivers.searchTerm);

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="text-center">
        <br/>
      <h4 className="">Drivers</h4>
      <div className="">
        <label className="">Search</label>
        <br/>
        <input className="" value={searchTerm} onChange={handleSearchTermChange} />
      </div>
    </div>
  );
}

export default FavoriteDriversSearch;
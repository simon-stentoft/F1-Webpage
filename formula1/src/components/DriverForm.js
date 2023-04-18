import { useDispatch, useSelector } from "react-redux";
import { changeName, changeDescription } from "../store/formSlice";
import { addDriver } from "../store/favoriteDriversSlice";

function DriverForm() {
  const dispatch = useDispatch();
  const {name, description} = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.cost
    }
  });
 

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    dispatch(changeDescription(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addDriver({name, description}));
  }

  return (
    <div className="text-center">
      <h4 className="">Add driver</h4>
      <form onSubmit={handleSubmit}>
      <div className="">
        <div className="">
          <label className="">Name</label>
          <br/>
          <input className="" value={name} onChange={handleNameChange} />
        </div>
        <div className="">
          <label className="">Description</label> 
          <br/>
          <input className="" value={description} onChange={handleDescriptionChange} />  
        </div>
        </div>
        <div className="">
        <br/>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    );
}

export default DriverForm;

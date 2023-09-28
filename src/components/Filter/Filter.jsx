import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Find contact by name
        <input type="text" onChange={handleChange}></input>
      </label>
    </div>
  );
};

export default Filter;

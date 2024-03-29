import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      ></input>
    </>
  );
};

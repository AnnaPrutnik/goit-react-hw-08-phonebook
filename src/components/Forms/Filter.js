import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/filterSlice';
import { getFilter } from '../../redux/phonebook/filterSelector';

import s from './Forms.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={s.FilterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={onChangeFilter}
        className={s.FilterInput}
      />
    </label>
  );
}

export default Filter;

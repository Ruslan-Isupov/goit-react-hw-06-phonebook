import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterName = e => dispatch(setFilter(e.target.value));

  const filter = useSelector(getFilter);

  return (
    <FilterContainer>
      <label htmlFor="filter"> Filters contacts by name </label>

      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={setFilterName}
        id="filter"
        required
      />
    </FilterContainer>
  );
};

import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const filterContacts = e => {
        const { value } = e.target;
        dispatch(setFilterValue(value));
    };
    
    return (
        <div className={css.filter}>
            <label className={css.filterLabel}>Find contacts by name</label>
            <input
                className={css.filterInput}
                type="text"
                name="find"
                onChange={filterContacts}
                title="Find contacts by name"
            />
        </div>
    );
};

export default Filter;
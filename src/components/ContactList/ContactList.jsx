import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const deleteContactFromLS = e => {
        e.preventDefault();
        const { id } = e.target;
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.contactList} >
            {contacts
                .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                .map(({id, name, number}) => {
                    return (
                        <li className={css.contactItem} key={id}>
                            <span>{name}: {number}</span>
                            <button
                                className={css.contactButton}
                                type="button"
                                id={id}
                                onClick={deleteContactFromLS}>
                                X
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }))
};

export default ContactList;
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, deleteContact }) => {
    return (
        <>
            <li className={css.contactItem} >
                <span>{name}: {number}</span>
                <button
                    className={css.contactButton}
                    type="button"
                    onClick={() => deleteContact(id)}>
                    X
                </button>
            </li>
        </>
    );
};

ContactListItem.propTypes = {
    key: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
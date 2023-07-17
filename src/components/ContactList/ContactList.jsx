import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import ContactListItem from "components/ContactListItem/ContactListItem";

const ContactList = ({ contacts, filter, deleteContact }) => {
    return (
        <ul className={css.contactList} >
            {contacts
                .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                .map(contact => {
                    const key = nanoid();
                    return (
                        <ContactListItem
                            key={key}
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                            deleteContact={deleteContact}
                        />
                    )
                })}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = () => {

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const onSubmitCheckAndAdd = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const formName = form.elements.name.value;
        const formNumber = form.elements.number.value;

        contacts.find(contact => contact.name.toLowerCase() === formName.toLowerCase())
            ? window.alert(`${formName} is already in contacts`)
            : dispatch(addContact(formName, formNumber));
        
        form.reset();
    };
    
    return (
        <form className={css.form} onSubmit={onSubmitCheckAndAdd}>
            <label className={css.formLabel}>Name</label>
            <input
                className={css.formInput}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={css.formLabel}>Number</label>
            <input
                className={css.formInput}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.formButton} type="submit">Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
};

export default ContactForm;
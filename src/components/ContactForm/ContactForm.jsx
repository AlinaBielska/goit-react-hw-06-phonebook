import { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ contacts, onSubmitContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onInputChangeName = evt => {
        setName(evt.target.value);
    };

    const onInputChangeNumber = evt => {
        setNumber(evt.target.value);
    };

    const onSubmitCheckAndAdd = evt => {
        evt.preventDefault();
        const contact = { name, number }
        if (contacts.find((e) => e.name === contact.name)) {
            alert(`${name} is already in contact!`);
        } else {
            onSubmitContact(contact);
            setName("");
            setNumber("");
        }
    };

    let idName = nanoid();
    let idNumber = nanoid();
    
    return (
        <form className={css.form} onSubmit={onSubmitCheckAndAdd}>
            <label className={css.formLabel} htmlFor={idName}>Name</label>
            <input
                className={css.formInput}
                id={idName}
                type="text"
                name="name"
                value={name}
                onChange={onInputChangeName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={css.formLabel} htmlFor={idNumber}>Number</label>
            <input
                className={css.formInput}
                id={idNumber}
                type="tel"
                name="number"
                value={number}
                onChange={onInputChangeNumber}
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
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onSubmitContact: PropTypes.func.isRequired,
    
};

export default ContactForm;
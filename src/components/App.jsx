import ContactForm from "./ContactForm/ContactForm";
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.body}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrapper}>
        <ContactForm />
        <div className={css.contacts}>
          <h2 className={css.contactsTitle} >Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
};
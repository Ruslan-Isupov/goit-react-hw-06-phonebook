import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm/>

      <h2>Contacts</h2>
      <Filter  />
      <ContactList  />
    </>
  );
};

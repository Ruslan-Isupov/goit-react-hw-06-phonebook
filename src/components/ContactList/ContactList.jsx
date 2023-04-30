import { useSelector } from 'react-redux';
import { ContactsList, ContactItmem } from './ContactList.styled';
import { ElementContacts } from 'components/ElementContacts/ElementContacts';
import { getContacts,getFilter } from 'redux/selectors';

export const ContactList = () => {
 
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);

const filterContactList = contacts?.filter(contact =>
contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsList>
      {filterContactList &&
        filterContactList.map(contact => {
          return (
            <ContactItmem key={contact.id}>
              <ElementContacts
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </ContactItmem>
          );
        })}
    </ContactsList>
  );
};

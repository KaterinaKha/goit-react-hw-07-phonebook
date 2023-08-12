import css from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const showContList = filter === '' ? contacts : filteredContacts;
  const onDelContact = contId => {
    dispatch(deleteContact(contId));
  };

  return (
    <ul className={css.contaktList}>
      {showContList.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <span>{contact.name}</span>:
          <span className={css.contactNumber}> {contact.number}</span>
          <button
            className={css.contactDeleteBtn}
            onClick={() => onDelContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

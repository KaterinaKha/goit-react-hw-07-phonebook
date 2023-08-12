import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactList />
    </>
  );
}

export default App;

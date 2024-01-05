import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsSlice';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const contactsExist = contacts?.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contactsExist && <h2>Contacts</h2>}
      {contactsExist && <Filter />}
      <ContactList />
    </>
  );
};

export default App;

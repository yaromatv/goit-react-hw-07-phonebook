import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useGetContactsQuery } from 'redux/contactsSlice';

const App = () => {
  const { data: contacts } = useGetContactsQuery();
  const contactsExist = contacts?.length > 0;

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

import { useSelector } from 'react-redux';
import css from 'components/ContactList/ContactList.module.css';
import { useGetContactsQuery } from 'redux/contactsSlice';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  // const { data: contacts, error, isLoading } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts =
    contacts?.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;
  // console.log(filteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts?.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

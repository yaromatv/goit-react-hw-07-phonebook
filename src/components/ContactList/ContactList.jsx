import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from 'components/ContactList/ContactList.module.css';
import { fetchContacts } from 'redux/contactsSlice';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts =
    contacts?.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : [];

  return (
    <ul className={css.contactList}>
      {filteredContacts?.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

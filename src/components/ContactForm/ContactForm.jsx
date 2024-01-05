import { useDispatch, useSelector } from 'react-redux';
import css from 'components/ContactForm/ContactForm.module.css';

import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const isAddContactLoading = useSelector(state => state.contacts.loading);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;

    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      if (existingContact.name.toLowerCase() === name.toLowerCase()) {
        window.alert(`${existingContact.name} is already in contacts`);
      }

      if (existingContact.number === number) {
        window.alert(`${existingContact.number} is already in contacts`);
      }

      return;
    }

    try {
      await dispatch(addContact({ name, number }));
      form.reset();
    } catch (error) {
      console.error('Error adding contact:', error);
      window.alert('Error adding contact. Please try again.');
    }
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button disabled={isAddContactLoading} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

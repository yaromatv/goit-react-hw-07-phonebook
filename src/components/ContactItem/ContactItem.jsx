import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isDeleteContactLoading = useSelector(state => state.contacts.loading);

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button
        disabled={isDeleteContactLoading}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

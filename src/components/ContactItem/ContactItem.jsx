import { useDeleteContactMutation } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: deleteIsLoading }] =
    useDeleteContactMutation();

  return (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button
        disabled={deleteIsLoading}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/phonebook/phonebookAPI';
import s from './Contact.module.css';

function ContactItem({ contact }) {
  const [deleteContact] = useDeleteContactMutation();

  const onDeleteContact = e => deleteContact(e.target.id);

  const { id, name, number } = contact;

  return (
    <li className={s.Item}>
      <span>
        {name}: {number}
      </span>
      <button id={id} type="button" onClick={onDeleteContact} className={s.Btn}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;

import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

import s from './Contact.module.css';

function ContactList({ contacts }) {
  return (
    <ul className={s.List}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;

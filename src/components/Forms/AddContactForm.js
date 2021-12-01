import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/phonebook/phonebookAPI';

import s from './Forms.module.css';

function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const checkDoubleContact = () => {
    const normalizedContactName = name.toLowerCase();
    return data.find(
      contact => contact.name.toLowerCase() === normalizedContactName,
    );
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const double = checkDoubleContact();
    if (double) {
      alert(`Contact with name ${name} already exist`);
      return;
    }
    const newUser = { name, number };
    addContact(newUser);

    reset();
  };

  return (
    <form onSubmit={handlerSubmit} className={s.Form}>
      <div className={s.Wrapper}>
        <label className={s.Label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            className={s.Input}
            onChange={handlerChange}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.Label}>
          Phone
          <input
            type="tel"
            name="number"
            value={number}
            className={s.Input}
            autoComplete="off"
            onChange={handlerChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
      <button type="submit" className={s.FormBtn}>
        Add contact
      </button>
    </form>
  );
}

export default AddContactForm;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Forms.module.css';
import { authOperations } from '../../redux/auth';
import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { register } = authOperations;

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handlerSubmit = e => {
    e.preventDefault();

    const newUser = { name, email, password };
    dispatch(register(newUser))
      .unwrap()
      .then(() => {
        success({
          title: `Welcome, ${email}`,
          text: 'You have successfully register',
        });
      })
      .catch(err => {
        console.log(err);
        error({
          title: 'Ooopppsss! Incorrect username or password',
          text: `${err}`,
        });
      });

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
          Email
          <input
            type="email"
            name="email"
            value={email}
            className={s.Input}
            onChange={handlerChange}
            autoComplete="off"
            required
          />
        </label>
        <label className={s.Label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            className={s.Input}
            autoComplete="off"
            onChange={handlerChange}
            required
          />
        </label>
      </div>
      <button type="submit" className={s.FormBtn}>
        Registration
      </button>
    </form>
  );
}

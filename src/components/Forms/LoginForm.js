import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { success, error, defaults } from '@pnotify/core';
import { authOperations } from '../../redux/auth';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import s from './Forms.module.css';

const { login } = authOperations;
defaults.delay = 2500;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
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
    setEmail('');
    setPassword('');
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const loginUser = { email, password };
    dispatch(login(loginUser))
      .unwrap()
      .then(() => {
        success({
          title: `Welcome back, ${email}`,
          text: 'You have successfully logged in',
        });
      })
      .catch(err => {
        error({
          title: 'Incorrect username or password',
          text: `${err}`,
        });
      });
    reset();
  };

  return (
    <>
      <form onSubmit={handlerSubmit} className={s.Form}>
        <div className={s.Wrapper}>
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
          Login
        </button>
      </form>
    </>
  );
}

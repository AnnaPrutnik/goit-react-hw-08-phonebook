import { useSelector, useDispatch } from 'react-redux';

import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';

const { getUserName } = authSelectors;
const { logout } = authOperations;

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch({ message: 'You not authorized' });

  const handleLogOut = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        info({
          text: 'You have successfully logged out',
        });
      })
      .catch(err => {
        console.log(err);
        error({
          title: 'Ooopppsss!',
          text: `${err}`,
        });
      });
  };

  return (
    <div className={s.Container}>
      <span className={s.Text}>Welcome, {userName}</span>
      <button type="button" onClick={handleLogOut} className={s.LogBtn}>
        LogOut
      </button>
    </div>
  );
}

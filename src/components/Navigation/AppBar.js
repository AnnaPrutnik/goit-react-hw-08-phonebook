import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import UserNav from './UserNav';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './Navigation.module.css';

import { authSelectors } from '../../redux/auth';

const { getIsLoggedIn, getIsRefreshing } = authSelectors;

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefresh = useSelector(getIsRefreshing);

  return (
    <header className={s.Header}>
      <UserNav />
      {isRefresh ? (
        <Loader
          type="ThreeDots"
          color="green"
          height={50}
          width={50}
          timeout={3000} //3 secs
        />
      ) : isLoggedIn ? (
        <UserMenu />
      ) : (
        <AuthNav />
      )}
    </header>
  );
}

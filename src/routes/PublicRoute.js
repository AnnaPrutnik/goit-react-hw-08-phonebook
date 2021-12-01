import { Navigate } from 'react-router-dom';

export default function PublicRoute({ component: Component, isAuth }) {
  return <>{isAuth ? <Navigate to="/contacts" /> : <Component />}</>;
}

import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component, isAuth }) {
  return <>{isAuth ? <Component /> : <Navigate replace to="/login" />}</>;
}

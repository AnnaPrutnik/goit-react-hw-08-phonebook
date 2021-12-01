import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';

import { authOperations, authSelectors } from '../../redux/auth';

const { getIsLoggedIn, getIsRefreshing } = authSelectors;

const HomePage = lazy(() => import('../../Pages/HomePage'));
const ContactPage = lazy(() => import('../../Pages/ContactPage.js'));
const RegistrationPage = lazy(() => import('../../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage'));

export default function RoutesApp() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefresh = useSelector(getIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="green"
            height={50}
            width={50}
            timeout={3000}
          />
        }
      >
        {!isRefresh && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute isAuth={isLoggedIn} component={RegistrationPage} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute isAuth={isLoggedIn} component={LoginPage} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute isAuth={isLoggedIn} component={ContactPage} />
              }
            />
          </Routes>
        )}
      </Suspense>
    </>
  );
}

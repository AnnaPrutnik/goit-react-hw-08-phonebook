import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

const { getIsLoggedIn } = authSelectors;

export default function UserNav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <ul className={s.NavList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? s.ActiveNavLink : s.NavLink
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? s.ActiveNavLink : s.NavLink
              }
            >
              Phonebook
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function AuthNav() {
  return (
    <div>
      <ul className={s.NavList}>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? s.ActiveNavLink : s.NavLink
            }
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? s.ActiveNavLink : s.NavLink
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

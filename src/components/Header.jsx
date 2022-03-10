import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <ul className='d-flex'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/wilders'>Wilders List</Link>
        </li>
        <li>
          <Link to='/wilders-form'>Add Wilders</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

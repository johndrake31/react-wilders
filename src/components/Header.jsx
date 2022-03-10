import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import styledComponents from 'styled-components';

const StyledLi = styledComponents.li`
margin: 1rem 1rem;
color: black;

`;
const StyledLiRed = styledComponents(StyledLi)`
background-color: red !important;
`;

const Header = (props) => {
  return (
    <header>
      <div className='container'>
        <h1 className='text-center'>Wilders Book</h1>
      </div>

      <ul className={classes.flex}>
        <StyledLi>
          <Link to='/'>Home</Link>
        </StyledLi>
        <StyledLi>
          <Link to='/wilders'>Wilders List</Link>
        </StyledLi>
        <StyledLi>
          <Link to='/wilders-form'>Add Wilders</Link>
        </StyledLi>
      </ul>
    </header>
  );
};

export default Header;

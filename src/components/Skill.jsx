import React from 'react';
import PropTypes from 'prop-types';
import classes from './Skill.module.css';

const Skill = ({ title, votes, onClick }) => {
  // const {title, votes}=props
  const { skills, skillsLi, sVotes } = classes;

  const handleOnClick = () => {
    onClick(title);
  };
  return (
    <li onClick={handleOnClick} className={skillsLi}>
      <span className={skills}>{title}</span>
      {votes > 0 && <span className={sVotes}>{votes}</span>}
    </li>
  );
};
export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

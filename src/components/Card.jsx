import React from 'react';
import avatar from '../images/YmVdl3m.png';
import Skill from './Skill';
import PropTypes from 'prop-types';
import classes from './Card.module.css';

const Card = ({ skills, city, name }) => {
  // const { skills, city, name } = props;
  return (
    <div className={classes['wilder-card']}>
      <img className={classes['wilder-card-img']} src={avatar} alt='avatar' />

      <h3 className='card-title'>
        {name} of {city}{' '}
      </h3>

      <p className='card-text'>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <h4 className='card-title'>Wild Skills</h4>
      <ul className={classes['skills']}>
        {skills.length > 0 &&
          skills.map(({ _id, votes, title }) => (
            <Skill key={_id} votes={votes} title={title}></Skill>
          ))}
      </ul>
    </div>
  );
};

export default Card;

Card.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })),
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

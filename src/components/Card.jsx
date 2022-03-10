import React from 'react';
import avatar from '../images/YmVdl3m.png';
import Skill from './Skill';
const Card = (props) => {
  const { skills, city, name } = props;
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={avatar} className='card-img-top' alt='avatar' />
      <div className='card-body'>
        <h4 className='card-title'>{name}</h4>
        <h5 className='card-title'>{city}</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {skills &&
          skills.map((skill) => (
            <Skill
              key={skill._id}
              votes={skill.votes}
              title={skill.title}
            ></Skill>
          ))}
      </div>
    </div>
  );
};

export default Card;

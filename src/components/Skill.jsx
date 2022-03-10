import React from 'react';
import PropTypes from 'prop-types';
import classes from './Skill.module.css'

const Skill = ({title, votes}) => {
    // const {title, votes}=props
    const {skills, skillsLi, sVotes} = classes
    return ( 
        <>
        
        <li className={skillsLi}>
           <span className={skills}>{title}</span>  
           <span className={sVotes}>{votes}</span> 
        </li>
        </>
     );
}
export default Skill;

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
}
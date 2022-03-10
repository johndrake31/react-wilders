import React from 'react';

const Skill = (props) => {
    const {skill}=props;
    return ( 
        <span className="badge rounded-pill bg-dark">{skill}</span>
     );
}
export default Skill;
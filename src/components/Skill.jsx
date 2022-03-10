import React from 'react';

const Skill = (props) => {
    const {title, votes}=props
    return ( 
        <span className="badge rounded-pill bg-dark">
            {title} 
            <span> {votes}</span>
        </span>
     );
}
export default Skill;
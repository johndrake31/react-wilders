import React from 'react';

const Pill = (props) => {
    const {skill}=props;
    return ( 
        <span className="badge rounded-pill bg-dark">{skill}</span>
     );
}
export default Pill;
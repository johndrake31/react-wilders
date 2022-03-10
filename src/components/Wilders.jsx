import React, {useContext} from 'react';
import WilderContext from '../context/WilderContext'; 
import classes from './Wilders.module.css'

const Wilders = (props) => {
    const {wilders, setWilders} = useContext(WilderContext);

    return ( 
    <div className='container'>
        <h2 className='text-dark'>WIlders List</h2>
        {wilders && wilders.map((wilder)=>(
            <div key={wilder._id}>
                <p>{wilder.name}</p>
                <p>{wilder.city}</p>
            </div>
        ))}
    </div>

    );
}
 
export default Wilders;
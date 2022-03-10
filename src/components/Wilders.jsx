import React, { useContext, useEffect } from 'react';
import Card from './Card';
import classes from './Wilders.module.css';
import useWilders from '../hooks/useWilders';

const Wilders = () => {
  const [ wilders, setWilders ] = useWilders();
  useEffect(()=>{
    fetch('http://localhost:4000/api/wilders')
    .then(res=>res.json())
    .then(data=> {
      setWilders(data)
    })

  },[wilders, setWilders])
  return (
    <div className='container'>
      <h2 className='text-dark'>Wilders List</h2>
      {wilders &&
        wilders.map((wilder) => (
          <Card
            key={wilder._id}
            name={wilder.name}
            skills={wilder.skills}
            city={wilder.city}
          ></Card>
        ))}
    </div>
  );
};

export default Wilders;

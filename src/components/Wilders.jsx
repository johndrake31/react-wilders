import React, { useContext, useEffect } from 'react';
import Card from './Card';
import classes from './Wilders.module.css';
import useWilders from '../hooks/useWilders';

const Wilders = () => {
  const [wilders, setWilders] = useWilders();
  useEffect(() => {
    fetch('http://localhost:4000/api/wilders')
      .then((res) => res.json())
      .then((data) => {
        setWilders(data);
      });
  }, []);

  return (
    <div className='container'>
      <h2 className=''>Wilders List</h2>
      <div className={classes['card-row']}>
        {wilders &&
          wilders.map((wilder) => (
            <Card
              key={wilder._id}
              {...wilder}
            ></Card>
          ))}
      </div>
    </div>
  );
};

export default Wilders;

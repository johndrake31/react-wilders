import React from 'react';

const Home = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className='text-center'>Hello Wilders</h2>
        <div className='col-6 border border-1 border-success bg-success p-5'>
          <h3 className='text-white text-center'>
            This is the fornt end of a REST API
          </h3>
        </div>
        <div className='col-4 border border-1 border-primary bg-primary p-5'>
          <h5 className='text-white text-center'>
            Here you will have access to a UI with the all the CRUD methods.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;

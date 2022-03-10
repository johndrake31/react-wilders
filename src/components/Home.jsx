import React from 'react';
import {
  StyleContainer,
  StyleContainerRose,
  StyleContainerBlue,
  StyleContainerGreen,
} from './styles/StyleContainer';
import {
  StyleButton,
  StyleButtonB,
  StyleButtonR,
  StyleButtonG,
  StyleButtonY,
} from './styles/StyleButton';

const Home = (props) => {
  return (
    <>
      <StyleContainerRose>
        <h1>This is HOME</h1>
      </StyleContainerRose>
      <StyleContainerBlue>
        <h1>This is HOME</h1>
      </StyleContainerBlue>
      <StyleContainerGreen>
        <h1>This is HOME</h1>
      </StyleContainerGreen>
      <StyleContainer>
        <StyleButton onClick={()=>{console.log('clicked')}}>Click</StyleButton>
        <StyleButtonR>Click</StyleButtonR>
        <StyleButtonB>Click</StyleButtonB>
        <StyleButtonG>Click</StyleButtonG>
        <StyleButtonY>Click</StyleButtonY>
      </StyleContainer>
    </>
  );
};

export default Home;

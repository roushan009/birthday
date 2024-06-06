// Background.js
import React from 'react';
import styled from 'styled-components';

// const BackgroundContainer = styled.div`
//   background: linear-gradient(to right, #ff6e7f, #bfe9ff);
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: auto;
// `;

const Text = styled.h1`
  font-size: 3rem;
  color: red;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Background = () => {
  return (
    // <BackgroundContainer>
      <Text>Dear my Love 😍 Mam</Text>
    // </BackgroundContainer>
  );
};

export default Background;
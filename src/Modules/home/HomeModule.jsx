import React from 'react';
import styled from 'styled-components';
import LeftComponent from './components/LeftComponent';

const StyledHome = styled.div`
  width: 100%;
  background: pink;
  color :red;
  height: 100vh;
`

function HomeModule() {
  return (
    <StyledHome>
      <LeftComponent/>
    </StyledHome>
  )
}

export default HomeModule
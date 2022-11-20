import React from 'react';
import styled from 'styled-components';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`

function HomeModule() {
  return (
    <StyledHome>
      <LeftComponent/>
      <RightComponent/>
    </StyledHome>
  )
}

export default HomeModule
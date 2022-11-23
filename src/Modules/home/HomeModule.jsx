import React from 'react';
import styled from 'styled-components';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import Modal from '../../shared-components/Modal';

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`

function HomeModule() {
  const isModelOpened = true;
  return (
    <StyledHome>
      <LeftComponent/>
      <RightComponent/>
      { isModelOpened && <Modal/>}
    </StyledHome>
  )
}

export default HomeModule
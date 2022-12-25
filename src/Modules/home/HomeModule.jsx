import React, {useContext} from 'react';
import styled from 'styled-components';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import Modal from '../../shared-components/Modal';
import {ModalContext} from '../../shared-components/contex/ModelContex';

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`

function HomeModule() {
  const {isOpenModal} = useContext(ModalContext);
  return (
    <StyledHome>
      <LeftComponent/>
      <RightComponent/>
      { isOpenModal.show && <Modal/>}
    </StyledHome>
  )
}

export default HomeModule
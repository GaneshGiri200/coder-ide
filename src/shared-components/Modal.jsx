import React from 'react';
import styled from 'styled-components';
import {NewEnvironment, NewFile, NewFolder} from './modal-types/ExportModelTypes'

const ModalContainer = styled.div`
    background: #9fafbb3e;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`

const ModalBody = styled.div`
    background: red;
    height: 300px;
    width: 500px;
`

function Modal() {
    const type = 1;
  return (
    <ModalContainer>
        <ModalBody>
            {type === 1 && <NewEnvironment/>}
            {type === 2 && <NewFile/>}
            {type === 3 && <NewFolder/>}
        </ModalBody>
    </ModalContainer>
  )
}

export default Modal
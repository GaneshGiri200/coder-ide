import React, {useContext} from 'react';
import styled from 'styled-components';
import {NewEnvironment, NewFile, NewFolder} from './modal-types/ExportModelTypes';
import { ModelContext } from './contex/ModelContex';

const ModalContainer = styled.div`
    background: #9fafbb3e;
    position: fixed;
    display: fixed;
    align-items: center;
    justify-content: center;
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

    const {modelType} = useContext(ModelContext);
  return (
    <ModalContainer>
        <ModalBody>
            {modelType === 1 && <NewEnvironment/>}
            {modelType === 2 && <NewFile/>}
            {modelType === 3 && <NewFolder/>}
        </ModalBody>
    </ModalContainer>
  )
}

export default Modal
import React, {useContext} from 'react';
import styled from 'styled-components';
import {NewEnvironment, NewFile, NewFolder, EditFile} from './modal-types/ExportModelTypes';
import { ModelContext } from './contex/ModelContex';

const ModalContainer = styled.div`
    background: #3b3b3ba3;
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
    background: #e8ecee;
    border-radius: 5px;
    padding: 30px 30px 20px;
    width: 600px;
    position: relative;
`

function Modal() {

    const {modelType} = useContext(ModelContext);
    return (
        <ModalContainer>
            <ModalBody>
                {modelType === 1 && <NewEnvironment/>}
                {modelType === 2 && <NewFile/>}
                {modelType === 3 && <NewFolder/>}
                {modelType === 4 && <EditFile/>}
            </ModalBody>
        </ModalContainer>
    )
}

export default Modal
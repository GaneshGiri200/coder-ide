import React, {useContext} from 'react';
import styled from 'styled-components';
import {NewEnvironment, NewFile, NewFolder, EditFile, EditFolder} from './modal-types/ExportModelTypes';
import { ModalContext } from './contex/ModelContex';

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

    const {isOpenModal} = useContext(ModalContext);
    const {modalType} = isOpenModal;
    return (
        <ModalContainer>
            <ModalBody>
                {modalType === 1 && <NewEnvironment/>}
                {modalType === 2 && <NewFile/>}
                {modalType === 3 && <NewFolder/>}
                {modalType === 4 && <EditFile/>}
                {modalType === 5 && <EditFolder/>}
            </ModalBody>
        </ModalContainer>
    )
}

export default Modal
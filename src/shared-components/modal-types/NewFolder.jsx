import React, {useContext} from 'react';
import { ModalContext } from '../contex/ModelContex';
import {IoMdClose} from 'react-icons/io';


function NewFolder() {
  const {closeModal} = useContext(ModalContext);
  return (
    <>
        <h4 align='center' className='mb-4'>Create New Folder</h4>
        <button className="popup-close-btn" onClick={()=> closeModal()}><IoMdClose/></button>
        <div className="row mb-3">
          <div className='col-sm-4'>
            <label className="form-label">Enter Folder Name</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12" align='center'>
            <button className='popup-submit-btn'>Create</button>
          </div>
        </div>
    </>
  )
}

export default NewFolder
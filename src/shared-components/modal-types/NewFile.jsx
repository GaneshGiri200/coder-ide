import React, {useContext} from 'react';
import { ModalContext } from '../contex/ModelContex';
import {IoMdClose} from 'react-icons/io'

function NewFile() {
  const { closeModal } = useContext(ModalContext);
  return (
    <>
        <h4 align='center' className='mb-4'>Create File</h4>
        <button className="popup-close-btn" onClick={()=> closeModal()}><IoMdClose/></button>
        <div className="row mb-3">
          <div className='col-sm-4'>
            <label className="form-label">Enter File Name</label>
          </div>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className='col-sm-6'>
            <div className="mb-3">
              <select class="form-select">
                <option value="Java">Java</option>
                <option value="C++">C++</option>
                <option value="Javascript">JavaScript</option>
                <option value="Python">Python</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <button className='popup-submit-btn'>Create</button>
          </div>
        </div>
    </>
  )
}

export default NewFile
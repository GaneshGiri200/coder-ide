import React, {useContext} from 'react';
import styled from 'styled-components';
import {FaPlus, FaEdit, FaTrashAlt} from 'react-icons/fa';
import Icon from '../../../assets/Logo.svg';
import { ModalContext } from '../../../shared-components/contex/ModelContex';
import { EnvironmentContext } from '../../../shared-components/contex/EnvironemntContext';

const StyledRightComponent = styled.div`
    width: 70%;
    background-color: #e1f5fe;
    height: 100vh;
    float: right;
    padding: 15px 30px;
    overflow-y: scroll;

    .general-btn{
    border: 1px solid;
    border-radius: 5px;
    padding: 4px 10px;
    background: #ABD8FE;
  }
`

const Heading = styled.div`
  height: 60px;
  padding: 15px 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid gray;

  font {
    font-size: 1.5rem;
  }
`

const FolderDiv = styled.div`
  margin-top: 20px;

  .accordion-button {
    background-color: #3D5D74;
    color: #FFF;
  }
`

const FolderLayout = styled.div`
  margin: 0;

  .folder-operation-head {
    display: flex;
    justify-content: space-evenly;
  }

  .folder-file-div {
    margin-top: 10px;
    padding-bottom: 10px;
  }

  .file-card {
    height: 70px;
    padding: 5px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 0 0 3px #666;
    background-color: #fff;
  }

  .file-icon {
    width: 100%;
    height: 100%;
    color: red;
  }

  .file-icon-div {
    width: 20%;
    height: 100%;
    float: left;
  }

  .file-content-div {
    width: 80%;
    height: 100%;
    padding: 5px 5px 5px 10px;
    float: right;
  }

  .file-heading {
    display: flex;
    justify-content: space-between;
  }

  .row {
    margin: 0;
  }

  .file-option-icon {
    cursor: pointer;
  }
`

function RightComponent() {
  const { openModal } = useContext(ModalContext);
  const {folders, deleteFolder} = useContext(EnvironmentContext);

  return (
    <StyledRightComponent>
      <Heading>
        <font>My <b>Environments</b></font>
        <button className='btn general-btn' onClick={() =>openModal({  
            show : true,
            modalType : 3,
            identifier: {
                folderId :"",
                SCardId: "",
            }   
        })}><FaPlus/>New Folder</button>
      </Heading>

      {folders.map((folder, index) => (
        <FolderDiv key={folder.id}>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={'#folder'+folder.id} aria-expanded="false">
                {folder.name}
              </button>
            </h2>
            
            <div id={'folder'+folder.id} className="accordion-collapse collapse">
              <div className="accordion-body" style={{padding: '10px 5px 5px'}} >
                <FolderLayout>
                  <div className='folder-operation-head'>
                    <button className='btn general-btn' onClick={() => openModal({  
                      show : true,
                      modalType : 5,
                      identifier: {
                          folderId :"",
                          SCardId: "",
                      }   
                  })}><FaEdit/>Edit Folder</button>
                    <button className='btn general-btn' onClick={() => deleteFolder(folder.id)}><FaTrashAlt/> Delete folder</button>
                    <button className='btn general-btn' onClick={() => openModal({  
                      show : true,
                      modalType : 2,
                      identifier: {
                          folderId :"",
                          SCardId: "",
                      }   
                  })}><FaPlus/>Add New File</button>
                  </div>
                  <div className='folder-file-div'>
                    <div className="row">
                      {
                        folder.file.map((file, index)=> (
                          <div className='col-md-4' key={file.id}>
                            <div className="file-card">
                              <div className="file-icon-div">
                                <img src={Icon} alt="File Icon" className="file-icon" />
                              </div>
                              <div className="file-content-div">
                                <div className="file-heading">
                                  <span><b>{file.name}</b></span>
                                  <div>
                                    <FaEdit onClick={() => openModal({  
                                        show : true,
                                        modalType : 4,
                                        identifier: {
                                            folderId :"",
                                            SCardId: "",
                                        }   
                                    })} className='file-option-icon'/> &nbsp;
                                    <FaTrashAlt className='file-option-icon'/>
                                  </div>
                                </div>
                                <div>
                                  <span><b>Language:</b> {file.language} </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </FolderLayout>
              </div>
            </div>
          </div>
        </div>
      </FolderDiv>
      ))}

      
    </StyledRightComponent>
  )
}

export default RightComponent
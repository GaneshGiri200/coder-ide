import React, {useContext} from 'react';
import styled from 'styled-components';
import {FaPlus, FaEdit, FaTrashAlt} from 'react-icons/fa';
import Icon from '../../../assets/Logo.svg';
import { ModelContext } from '../../../shared-components/contex/ModelContex';

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
`

function RightComponent() {
  const {setModel} = useContext(ModelContext);

  return (
    <StyledRightComponent>
      <Heading>
        <font>My <b>Environments</b></font>
        <button className='btn general-btn' onClick={() => setModel(true, 3)}><FaPlus/>New Folder</button>
      </Heading>

      <FolderDiv>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false">
                Folder Name
              </button>
            </h2>
            
            <div id="flush-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body" style={{padding: '10px 5px 5px'}} >
                <FolderLayout>
                  <div className='folder-operation-head'>
                    <button className='btn general-btn' onClick={() => setModel(true, 3)}><FaEdit/>Edit Folder</button>
                    <button className='btn general-btn'><FaTrashAlt/> Delete folder</button>
                    <button className='btn general-btn' onClick={() => setModel(true, 2)}><FaPlus/>Add New File</button>
                  </div>
                  <div className='folder-file-div'>
                    <div className="row">
                      {
                        Array.from({length : 5}).map(()=> (
                          <div className='col-md-4'>
                            <div className="file-card">
                              <div className="file-icon-div">
                                <img src={Icon} alt="File Icon" className="file-icon" />
                              </div>
                              <div className="file-content-div">
                                <div className="file-heading">
                                  <span><b>File Name</b></span>
                                  <div>
                                    <FaEdit onClick={() => setModel(true, 2)} /> &nbsp;
                                    <FaTrashAlt/>
                                  </div>
                                </div>
                                <div>
                                  <span><b>Language:</b> JavaScript </span>
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
    </StyledRightComponent>
  )
}

export default RightComponent
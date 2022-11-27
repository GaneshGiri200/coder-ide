import React, {useContext} from 'react';
import { ModelContext } from '../contex/ModelContex';


function NewEnvironment() {
  const {setIsModelOpened} = useContext(ModelContext);
  return (
    <>
        <h4>Create Environement by creating folder and file </h4>
        <button onClick={()=> {setIsModelOpened(false)}}>Close</button>
        <label>Enter Folder Name</label>
        <input type="text" />
        <select name="" id="">
          <option value="Java"></option>
          <option value="C++"></option>
          <option value="JavaScript"></option>
          <option value="Python"></option>
        </select>
        <label>Enter File Name</label>
        <input type="text" />
    </>
  )
}

export default NewEnvironment
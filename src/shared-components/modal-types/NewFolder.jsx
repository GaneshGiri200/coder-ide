import React, {useContext} from 'react';
import { ModelContext } from '../contex/ModelContex';

function NewFolder() {
  const {setIsModelOpened} = useContext(ModelContext);
  return (
    <>
        <h4>Create a folder </h4>
        <label>Enter Folder Name</label>
        <input type="text" />
        <button onClick={() => setIsModelOpened(false)}>
          close
        </button>
    </>
  )
}

export default NewFolder
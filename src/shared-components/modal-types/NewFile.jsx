import React, {useContext} from 'react';
import { ModelContext } from '../contex/ModelContex';

function NewFile() {
  const {setIsModelOpened} = useContext(ModelContext);
  return (
    <>
        <h4>Create a file </h4>
        <label>Enter File Name</label>
        <input type="text" />
        <button onClick={() => setIsModelOpened(false)}>
          close
        </button>
    </>
  )
}

export default NewFile
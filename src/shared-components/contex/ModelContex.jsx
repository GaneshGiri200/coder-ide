import { createContext, useState } from "react";

export const ModelContext = createContext();

export default function ModelProvider({children}){
  const [isModelOpened, setIsModelOpened] = useState(false);
  const [modelType, setModelType] = useState(null);

  const setModel = (isModelOpened, type) => {
    setIsModelOpened(isModelOpened);
    setModelType(type);
  }
    return(
        <ModelContext.Provider value={{isModelOpened, modelType, setIsModelOpened, setModel}}>
            {children}
        </ModelContext.Provider>
    )
}
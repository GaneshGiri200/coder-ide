import { createContext, useState } from "react";

export const ModelContext = createContext();

export default function ModelProvider({children}){
  const [isModelOpened, setIsModelOpened] = useState(false);
    return(
        <ModelContext.Provider value={{isModelOpened, setIsModelOpened}}>
            {children}
        </ModelContext.Provider>
    )
}
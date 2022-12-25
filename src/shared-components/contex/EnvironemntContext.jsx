// all folders cards and all function related to them.
import { createContext, useState } from "react";

export const EnvironmentContext = createContext();

const EnvironementProvider = ({children}) => {
    // rough implementation of a Environment
    const [folders, setFolders] = useState([
        {
            id: "1",
            name:"folder1",
            file: [
                {
                    id: "1_1",
                    name: "fileName",
                    language: "javaScript"
                },
                {
                    id: "1_2",
                    name: "fileName",
                    language: "java"
                }
            ]
        },
        {
            id: "2",
            name:"folder2",
            file: [
                {
                    id: "2_1",
                    name: "fileName",
                    language: "javaScript"
                },
                {
                    id: "2_2",
                    name: "fileName",
                    language: "java"
                }
            ]
        }
    ])

    // const deleteFile = (folderId, fileId ) => {
    //     folders[folderId].file = folders[folderId].file.filter((file) => file.id !== fileId);

    //     setFolders([...folders]);
    // }

    const deleteFolder = (folderId) => {
        setFolders(folders.filter((folder) => folder.id !== folderId));
    }

    return(
        <EnvironmentContext.Provider value={{folders, deleteFolder}}>
            {children}
        </EnvironmentContext.Provider>
    )
}

export default EnvironementProvider 
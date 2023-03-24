import { createContext, useState } from "react";

export const DataCenter = createContext()

export const DataProvider = ({children})=>{
    // You can here define the state variables...
    const [color, setColor] = useState('orange');
    const [dark, setDark] = useState(false)
    const [bColor, setBColor] = useState('#FF0000')

    return(
        <DataCenter.Provider value={{color, setColor, dark, setDark, bColor, setBColor}}>
            {/* Render the children (App) */}
            {children}
            {/* In this case, App with his children */}
        </DataCenter.Provider>
    )
}
import React, { createContext, useEffect, useState } from 'react'
import { outerData } from './outerData';
import { nanoid } from 'nanoid';
export const DataContext = createContext(null);


const ContextCont = (props) => {
    const [data, setdata] = useState([]);
     const [outerDataState, setOuterDataState] = useState(
        outerData.map(data => ({ ...data, id: nanoid() }))
      );

    useEffect(() => {
      setdata(JSON.parse(localStorage.getItem("data")) || [])
    }, [])
    
    return (
        <DataContext.Provider value={{ data, setdata, outerDataState, setOuterDataState }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextCont
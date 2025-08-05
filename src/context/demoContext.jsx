
import { createContext, useContext, useState } from 'react';

export const DemoDataContext = createContext();

const DemoContext = ({ children }) => {
    const [CaptainData, setCaptainData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);

const updateCaptain = (captainData) => {
        setCaptainData(captainData);
}

    return(
        <DemoDataContext.Provider value={{
            CaptainData,
            setCaptainData,
            isLoading, setIsLoading, error, setError,
            updateCaptain
            }}>
            {children}
        </DemoDataContext.Provider>
    )
}

export default DemoContext;


/// it's context of captain data, we can use it to store and update captain data
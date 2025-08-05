import React, { createContext, useState } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captaindetail, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  

 
    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    }

    return (
        <CaptainDataContext.Provider value={{ captaindetail, setCaptain, isLoading, setIsLoading, error, setError }}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;
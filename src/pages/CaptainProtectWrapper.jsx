import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const CaptainProtectWrapper = ({
    children
}) => {

   
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)
    const token = localStorage.getItem('captain-token');

useEffect(() => {
    
    if (!token) {
        navigate('/captain-login');
        return;
    }

    axios.get('http://localhost:4000/captain/profile', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status === 200) {
            setCaptain(response.data.captain);
            setIsLoading(false);
        }
    })
    .catch(err => {
        if (err.response && err.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/captain-login');
        } else {
            console.error(err);
        }
    });
}, [token]);

    

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }



    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper
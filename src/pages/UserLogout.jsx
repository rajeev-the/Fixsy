import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UserLogout = () => {

    const token = localStorage.getItem('token')
   
    const navigate = useNavigate();
    useEffect(() => {
        const logout = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Add token from localStorage/cookie
                      }
                });
                
                 console.log(res.status)
               
                if (res.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error(error);
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            }
        };

        logout();
    }, [navigate, token]);

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout
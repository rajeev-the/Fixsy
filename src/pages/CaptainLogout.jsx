import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
    const token = localStorage.getItem('captain-token');
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            if (!token) {
                console.error('No token found in localStorage');
                navigate('/captain-login'); // Redirect if no token is present
                return;
            }

            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (res.status === 200) {
                    localStorage.removeItem('captain-token');
                    navigate('/captain-login');
                }
            } catch (error) {
                console.error('Logout Error:', error);
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('captain-token');
                    navigate('/captain-login');
                } else {
                    alert('An error occurred during logout. Please try again.');
                }
            }
        };

        logout();
    }, [navigate, token]);

    return <div>Logging out...</div>;
};

export default CaptainLogout;

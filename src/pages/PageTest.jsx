import React from 'react'
import axios from 'axios'

const PageTest = () => {
    
    

    const getTest = async () => {
        const API_KEY = 'AlzaSyu2eaBiMZxoEpeRZ-ZNahQldgtmOHa4WIP'; // Ensure your API key is correctly formatted
        const address = 'taj mahal'; // Ensure the address is properly formatted
    
        try {
            const response = await axios.get('https://maps.gomaps.pro/maps/api/geocode/json', {
                params: {
                    address: address,
                    key: API_KEY,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.response ? error.response.data : error.message);
        }
    };
    
    getTest();
    
  return (
    <div>PageTest</div>
  )
}

export default PageTest
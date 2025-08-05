import React, { useState, useEffect } from 'react';

import car from "../assets/image.png";
import ele from "../assets/image copy 2.png";
import doc from "../assets/image copy.png";
import work from "../assets/image copy 3.png";
import Tec from "../assets/image copy 4.png";
import plu from "../assets/image copy 5.png";

const services = [
  { id: 1, name: 'Carpenter', icon: car },
  { id: 2, name: 'Electrician', icon: ele },
  { id: 3, name: 'Doctor', icon: doc },
  { id: 4, name: 'Worker', icon: work },
  { id: 5, name: 'Teacher', icon: Tec },
  { id: 6, name: 'Plumber', icon: plu },
];

const LookingForDriver = (props) => {
  const [iscount, setIscount] = useState(0);


  // Image slider every 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIscount(prev => (prev + 1) % services.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [iscount]);

  

  return (
    <div className='h-[450px]'>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-3 text-center">Connecting to Provider...</h3>

      <div className="flex gap-4 justify-between flex-col items-center">
        <div className="p-5 rounded-full bg-gray-100">
          <img
            className="h-[150px] w-[150px] object-contain rounded-full"
            src={services[iscount].icon}
            alt="Service Provider"
          />
        </div>

        <p className="text-lg text-gray-600 text-center mb-2">
          Estimated wait time: <strong>1-2 minutes</strong>
        </p>
        <p className="text-sm text-gray-400 text-center mb-5">
          Please stay on this screen while we connect you
        </p>

        <button
          className="bg-red-700 text-white w-full p-2 text-xl font-semibold rounded-sm"
          onClick={() => props.setVehicleFound(false)

            
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LookingForDriver;

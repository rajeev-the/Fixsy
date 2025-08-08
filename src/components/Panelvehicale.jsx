import React, { useState } from 'react'
import { Search,X } from 'lucide-react';
import car from "../assets/image.png"
import ele from "../assets/image copy 2.png"
import doc from "../assets/image copy.png"
import work from "../assets/image copy 3.png"
import Tec from "../assets/image copy 4.png"
import plu from "../assets/image copy 5.png"

const services = [
  { id: 1, name: 'Carpenter', icon: car },
  { id: 2, name: 'Electrician', icon: ele },
  { id: 3, name: 'Doctor', icon: doc },
  { id: 4, name: 'Worker', icon: work },
  { id: 5, name: 'Teacher', icon: Tec },
  { id: 6, name: 'Plumber', icon: plu },
];

const services1 = [
  { id: 1, name: 'Carpenter', icon: car },
  { id: 2, name: 'Electrician', icon: ele },
  { id: 3, name: 'Doctor', icon: doc },
  { id: 4, name: 'Worker', icon: work },
  { id: 5, name: 'Teacher', icon: Tec },
  { id: 6, name: 'Plumber', icon: plu },
  { id: 7, name: 'Electrician', icon: ele },
  { id: 8, name: 'Doctor', icon: doc },
  { id: 9, name: 'Worker', icon: work },
  { id: 10, name: 'Teacher', icon: Tec },
  { id: 11, name: 'Plumber', icon: plu },
  { id: 12, name: 'Electrician', icon: ele },
  { id: 13, name: 'Doctor', icon: doc },
  { id: 14, name: 'Worker', icon: work },
  { id: 15, name: 'Teacher', icon: Tec },
  { id: 16, name: 'Plumber', icon: plu },
];



const Panelvehicale = (props) => {

    const[isopen,setIsopen] = useState(false)

  return (
    <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanel(false)
               
            }}><i className="text-3xl text-[#004030] ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Pick Your Service Expert</h3>


             <section className="max-w-md mx-auto  shadow-xl rounded-2xl p-4 font-[Inter]">
      <div className="flex items-center justify-between mb-6">
  <div className="flex items-center gap-2 bg-[#4A9782] px-3 py-1.5 rounded-full w-full max-w-[220px]">
    <Search className="w-4 h-4 text-black" />
    <input
      type="text"
      placeholder="Search services..."
      className="bg-transparent focus:outline-none text-sm text-black placeholder-black w-full"
    />
  </div>

  <div onClick={
    ()=>
    setIsopen(!isopen)
  } className="ml-4 text-sm text-[#4A9782]  whitespace-nowrap">
    {isopen ? <X/> :"View All"  } 
  </div>
</div>


   <div className="h-[250px] overflow-y-auto px-2 ">
  <div className="grid grid-cols-3 gap-2">
    {(isopen ? services1 : services).map((service) => (
      <div
        key={service.name}
        onClick={() => {
          props.setVehicleFound(true);
          props.setVehicleType('car');
           props.handleRedirect()
           props.setSelectedProfessional(service.name)
        }}
        className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition cursor-pointer"
      >
        <img
          src={service.icon}
          alt={service.name}
          className="w-12 h-12 mb-2 object-contain"
        />
        <p className="text-sm font-semibold text-black text-center">
          {service.name}
        </p>
      </div>
    ))}
  </div>
</div>

    </section>

            

            {/* <div  onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehicleType('moto')
            }}  className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.moto}</h2>
            </div>
            
            <div  onClick={()=>{
                props.setConfirmRidePanel(true)
                props.setVehicleType('auto')
            }}  className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{props.fare.auto}</h2>
            </div> */}
        </div>
  )
}

export default Panelvehicale
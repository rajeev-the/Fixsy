import React, { useState } from 'react'
import ServiceCard from './ServiceCard '
import { useNavigate } from 'react-router-dom';


const ConfirmRide = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null)
   const navigtor =  useNavigate()

  const serviceData = [
    {
      name: "Rajeev",
      image: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
      rating: 5,
      basePrice: 200,
    },
    {
      name: "Ravi",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      basePrice: 180,
    },
    {
      name: "Amit",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      basePrice: 220,
    },
  ]

  return (
    <div className='w-full h-[450px]'>
      <h5
        className='p-1 text-center w-[93%] absolute top-0'
        onClick={() => props.setConfirmRidePanel(false)}
      >
        <i className="text-3xl text-[#004030]  ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className='text-2xl font-semibold mb-5'>Choose a Service Expert</h3>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full flex flex-col gap-3 mt-5'>
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              name={item.name}
              image={item.image}
              rating={item.rating}
              basePrice={item.basePrice}
              selected={selectedIndex === index}
              onSelect={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <button
          onClick={() => {
           navigtor("/riding")
          }}
          className='w-full mt-5 bg-[#4A9782] text-black font-semibold p-2 rounded-lg'
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ConfirmRide

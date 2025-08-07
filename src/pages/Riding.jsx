import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {

    const serviceData = 
   
    {
      name: "Amit",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      basePrice: 220,
    }
  


  return (
    <div className='h-screen'>
    <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-[#4A9782] flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium  text-[#DCD0A8] ri-home-5-line"></i>
    </Link>
    <div className=''>
    <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
                {/* <img className='h-12 rounded-full object-cover w-12' alt="" /> */}

    </div>
    <div className='h-[60%] p-4 bg-[#DCD0A8]'>
     <h5
        className=" text-center "
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-3xl text-[#004030] ri-arrow-down-wide-line"></i>
      </h5>

        <div className='flex border-b-2    border-[white] items-center justify-between'>
            <div>
                 <img className='h-12 rounded-full object-cover w-12'  src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
                 <div className="flex items-center text-yellow-500 text-xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < serviceData?.rating ? '★' : '☆'}</span>
            ))}
          </div>
            </div>
           
            <div className='text-right'>
               
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>{serviceData?.name}</h4>
                <p className='text-sm text-gray-600'>Carpenter</p>

            </div>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
            <div className='w-full mt-5'>

                       <div className='flex items-center gap-5 p-3 border-b-2'>
  <i className="ri-time-line"></i>
  <div>
    <h3 className='text-lg font-medium'>
      {serviceData?.reachTime || '15 min'}
    </h3>
    <p className='text-sm -mt-1 text-gray-600'>
      Expected arrival at service location
    </p>
  </div>
</div>

                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>xxxxx</h3>
                        <p className='text-sm -mt-1 text-gray-600'>xxxx</p>
                    </div>
                </div>

              

                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹{serviceData?.basePrice} </h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>

            </div>
        </div>
        <button className='w-full mt- bg-[#4A9782] text-[#DCD0A8] font-semibold p-2 rounded-lg'>Make a Payment</button>
         

    </div>
</div>
  )
}

export default Riding
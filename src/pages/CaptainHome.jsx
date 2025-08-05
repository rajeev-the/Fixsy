import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CaptainHome = () => {
  const [Ridingpopup, setRidingpopup] = useState(true)
  const [confirmRidePopUp, setConfrimRidingpopup] = useState(false)

  const refridingpopup = useRef(null)
  const refConfirmRidePopUp = useRef(null)

  useGSAP(function () {
    if (Ridingpopup) {
      gsap.to(refridingpopup.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(refridingpopup.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [Ridingpopup])

  useGSAP(function () {
    if (confirmRidePopUp) {
      gsap.to(refConfirmRidePopUp.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(refConfirmRidePopUp.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePopUp])

  return (
    <div className='h-screen'>
      {/* Header */}
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img
          className='w-16'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt='Uber logo'
        />
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='text-lg font-medium ri-logout-box-r-line'></i>
        </Link>
      </div>

      {/* Hero Section */}
      <div className='h-3/5'>
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt='Riding animation'
        />
      </div>

      {/* Dummy Captain Details */}
      <div className='h-2/5 p-6'>
        <h2 className='text-2xl font-bold text-gray-800'>Captain: John Doe</h2>
        <p className='text-lg text-gray-600'>Car Model: Toyota Camry 2020</p>
        <p className='text-lg text-gray-600'>Driver Rating: 4.8</p>
      </div>

      {/* Pop Up for Riding */}
      <div ref={refridingpopup} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <div className='text-center'>
          <h3 className='text-xl font-bold'>New Ride Request</h3>
          <p className='mt-2'>A new ride request has been received.</p>
          <button
            onClick={() => setConfrimRidingpopup(true)}
            className='mt-4 bg-green-500 text-white py-2 px-6 rounded-full'
          >
            Accept Ride
          </button>
          <button
            onClick={() => setRidingpopup(false)}
            className='mt-2 bg-red-500 text-white py-2 px-6 rounded-full'
          >
            Decline Ride
          </button>
        </div>
      </div>

      {/* Confirm Ride Pop Up */}
      <div ref={refConfirmRidePopUp} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <div className='text-center'>
          <h3 className='text-xl font-bold'>Ride Confirmed</h3>
          <p className='mt-2'>The ride has been successfully confirmed. Proceed to pick-up location.</p>
          <button
            onClick={() => setConfrimRidingpopup(false)}
            className='mt-4 bg-blue-500 text-white py-2 px-6 rounded-full'
          >
            Start Ride
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome

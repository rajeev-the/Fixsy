import React, { useRef, useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import PopUpRiding from '../components/PopUpRiding'
import { CaptainDataContext } from '../context/CaptainContext';
import { DemoDataContext } from '../context/demoContext'

const CaptainHome = () => {

  const [Ridingpopup ,setRidingpopup] =useState(true)
  const [confirmRidePopUp,setConfrimRidingpopup] = useState(false)
 
  const refridingpopup = useRef(null)
  const refConfirmRidePopUp = useRef(null)

   useGSAP(function () {
          if (Ridingpopup) {
              gsap.to(refridingpopup.current, {
                  transform: 'translateY(0)'
              })
          } else {
              gsap.to(refridingpopup.current, {
                  transform: 'translateY(100%)'
              })
          }
        }, [ Ridingpopup ])

        
   useGSAP(function () {
    if (confirmRidePopUp) {
        gsap.to(refConfirmRidePopUp.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(refConfirmRidePopUp.current, {
            transform: 'translateY(100%)'
        })
    }
  }, [ confirmRidePopUp ])

  return (
    <div className='h-screen'>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
    </div>
    <div className='h-3/5  '>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

    </div>
    <div className='h-2/5 p-6'>
        <CaptainDetails />
    </div>
    <div  ref={refridingpopup} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <PopUpRiding  setConfrimRidingpopup={setConfrimRidingpopup} setRidingpopup={setRidingpopup}/>
    </div>
    <div ref={refConfirmRidePopUp} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp
           
            setConfirmRidePopupPanel={setConfrimRidingpopup} setRidePopupPanel={setRidingpopup} />
    </div>
</div>
  )
}

export default CaptainHome
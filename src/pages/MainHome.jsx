import React from 'react'

import { useState,useRef } from 'react'
import  gasp from 'gsap'
import {useGSAP} from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import Panelvehicale from '../components/Panelvehicale'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const MainHome = () => {


  // update with your own items



  
  const navigate = useNavigate()
  const [ panelOpen, setPanelOpen ] = useState(false)
  const [pick,setPick] =useState('')
  const[vehicleType,setVehicleType]=useState('')
  const [destination,setDestination]= useState('')
  const [ vehiclePanel, setVehiclePanel ] = useState(false)
  const[confirmRidePanel,setConfirmRidePanel] = useState(false)
  const [ vehicleFound, setVehicleFound ] = useState(false)
  const [ waitingForDriver, setWaitingForDriver ] = useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [fare,setFare] =useState({})
  const [ activeField, setActiveField ] = useState(null)
  const confirmRidePanelRef =useRef(null)
  const paneleRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  // Redirect after 10 seconds
const handleRedirect = () => {
  const redirectTimer = setTimeout(() => {
    setVehicleFound(false);
    console.log("run")
    setConfirmRidePanel(true);
  }, 10000); // 10 seconds


  // Optional: return a clear function in case you want to cancel it
  return () => clearTimeout(redirectTimer);
};


  
 

const handleDestinationChange = async (e) => {
  
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestion`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch(err) {
      console.log(err)
      
        // handle error
    }
}


async function findTrip() {
  setVehiclePanel(true)
  setPanelOpen(false)

  try {
    
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ride/get-fare`, {
      params: { pickup:pick, destination:destination },
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
  setFare(response.data)

  } catch (error) {
    console.log(error)
    
  }


}


  
useGSAP(function (){
  if(panelOpen){
    gasp.to(paneleRef.current,{
      height:'70%',
      padding:24
       
    })

    gasp.to(panelCloseRef.current,{
      opacity:1
    })

  }
  else{
    gasp.to(paneleRef.current,{
      height:'0%',
      padding:0
      
    })
    gasp.to(panelCloseRef.current,{
      opacity:0
    })
  
  }
},[panelOpen])


useGSAP(function () {
  if (vehiclePanel) {
      gasp.to(vehiclePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gasp.to(vehiclePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehiclePanel ])


useGSAP(function () {
  if (confirmRidePanel) {
      gasp.to(confirmRidePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gasp.to(confirmRidePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ confirmRidePanel ])



useGSAP(function () {
  if (vehicleFound) {
      gasp.to(vehicleFoundRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gasp.to(vehicleFoundRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehicleFound ])


useGSAP(function () {
  if (waitingForDriver) {
      gasp.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gasp.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ waitingForDriver ])


async function createRide() {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/create`, {
     pickup: pick,
      destination,
      vehicleType
  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })


}



  const SubmitHandler = (e)=>{
    e.preventDefault()
  }
  
  return (

    <>
    <div className='h-screen relative overflow-hidden'>
      

    <div className="relative w-full px-6 py-8 flex justify-between  bg-[#10b981] rounded-b-3xl items-center z-5">
      <span className="absolute inset-0 z-10 pointer-events-none mix-blend-lighten blur-md bg-white/25 "></span>


  {/* Logo - Top Left */}
  <img
    className="w-[120px] sm:w-[100px] z-5 absolute "
    src="https://ik.imagekit.io/vuavxn05l/Fixsy%20Logo%20with%20Worker%20Silhouette.png?updatedAt=1752730508257"
    alt="Fixsy Logo"
  />

  {/* Button - Top Right */}
  <button
    onClick={() => navigate("/riding")}
    className="absolute top-2 right-5 h-10 w-10 rounded-full bg-black text-white shadow-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center   hover:scale-105"
  >
    <i className="ri-user-location-line text-2xl"></i>
  </button>

</div>

  
    <div className='h-screen w-screen'>
      {/* Image for temporary use */}
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

    </div>
    <div className='flex flex-col  justify-end h-screen absolute top-0 w-full'>
      <div className='h-[35%] p-6 bg-white relative'>
        <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}}
         className=' opacity-0 absolute right-6 top-3 text-xl'>
        <i className="  ri-arrow-down-wide-line"></i>
        </h5>
      
       
        <h4 className='text-2xl font-semibold '>Find Experts Near You</h4>

        <form onSubmit={(e)=>{SubmitHandler(e)}} className=' relative py-3 '  >
          
          <div className='line absolute h-6 w-1 top-[40%] -translate-x-1/2 left-5 bg-gray-700 rounded-full '>
             </div>
   
      <input 
      value={destination}
      onChange={handleDestinationChange}
      onClick={()=>{setPanelOpen(true)
        setActiveField('destination')


      }}
      type="text" className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
      placeholder='Entre your destination' 
      
      />  


        </form>
        <button onClick={findTrip}  className='bg-black px-4 py-2 text-white rounded-lg mt-3 w-full'>Find fixer</button>

      </div>
      <div ref={paneleRef} className=' bg-white h-0 '>
        <LocationSearchPanel  
                               suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                              setPickup={setPick}
                               setDestination={setDestination}
                               activeField={activeField}
                               setPanelOpen={setPanelOpen} 
                               setVehiclePanel={setVehiclePanel}
        />
      </div>

    </div>


    <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>

             <Panelvehicale 
             fare={fare}
              setVehiclePanel={setVehiclePanel}
              setConfirmRidePanel={setConfirmRidePanel}
              setVehicleType={setVehicleType}
               setVehicleFound ={setVehicleFound}
               handleRedirect={handleRedirect}
             
             />
      
       </div>


   //confirm ride
   <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>

            <ConfirmRide
            createride={createRide}
            pickup={pick}
            destination={destination}
            fare={fare}
            vehcicleType={vehicleType}
           
                   
            setVehicleFound={setVehicleFound}  setConfirmRidePanel={setConfirmRidePanel}/>
      
       </div>
        <div ref={waitingForDriverRef}  className='fixed w-full z-10 bottom-0  bg-white px-3 py-10 pt-12'>

           <WaitingForDriver 
            setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver}  />

               </div>



       <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>

           <LookingForDriver 
           pickup={pick}
           destination={destination}
           fare={fare}
           vehcicleType={vehicleType}
          setConfirmRidePanel={setConfirmRidePanel}    setVehicleFound={setVehicleFound}/>
           


      </div>

     



    </div>
 {/* end of main content container */}


</>
  )
}

export default MainHome
import React from 'react'
import { Link } from 'react-router-dom'



const Start = () => {


  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4">
        <button className="text-white">☰</button>
        <span className="text-xl font-bold">Services</span>
        <button className="text-white">🔍</button>
      </div>

      {/* Service Categories Section */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="text-center">
          <img src="path-to-carpenter-image" alt="Carpenter" className="mx-auto" />
          <span className="block mt-2">Carpenter</span>
        </div>
        <div className="text-center">
          <img src="path-to-electrician-image" alt="Electrician" className="mx-auto" />
          <span className="block mt-2">Electrician</span>
        </div>
        <div className="text-center">
          <img src="path-to-doctor-image" alt="Doctor" className="mx-auto" />
          <span className="block mt-2">Doctor</span>
        </div>
        <div className="text-center">
          <img src="path-to-worker-image" alt="Worker" className="mx-auto" />
          <span className="block mt-2">Worker</span>
        </div>
        <div className="text-center">
          <img src="path-to-teacher-image" alt="Teacher" className="mx-auto" />
          <span className="block mt-2">Teacher</span>
        </div>
        <div className="text-center">
          <img src="path-to-plumber-image" alt="Plumber" className="mx-auto" />
          <span className="block mt-2">Plumber</span>
        </div>
      </div>

      {/* Trending Service Section */}
      <div className="text-center mt-4">
        <button className="bg-teal-500 text-white py-2 px-4 rounded-full">
          Trending Service
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center p-4 bg-white">
        <button className="text-black">🏠</button>
        <button className="text-black">👥</button>
        <button className="text-black">📱</button>
        <button className="text-black">👤</button>
      </div>
    </div>
  )
}

export default Start
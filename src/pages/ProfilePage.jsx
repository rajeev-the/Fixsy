import React from 'react';
import { FaEdit, FaUserAlt, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 text-black">
      {/* Header */}
      <div className="w-full flex items-center justify-between py-4 px-2">
        <h1 className="text-xl font-semibold">My Profile</h1>
        <button className="text-[#10b981]">
          <FaEdit size={20} />
        </button>
      </div>

      {/* Profile Picture */}
      <div className="w-24 h-24 rounded-full bg-[#10b981] flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-md">
        <FaUserAlt size={40} />
      </div>

      {/* User Details */}
      <div className="w-full max-w-sm space-y-4">
        <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
          <FaUserAlt className="text-[#10b981]" />
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-md font-medium">Rajeev Ranjan</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
          <FaPhone className="text-[#10b981]" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-md font-medium">+91 7711993364</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
          <FaEnvelope className="text-[#10b981]" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-md font-medium">rajeev@example.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
          <FaLock className="text-[#10b981]" />
          <div>
            <p className="text-sm text-gray-500">Password</p>
            <p className="text-md font-medium">••••••••</p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="mt-10 w-full max-w-sm bg-[#10b981] text-white py-3 rounded-full shadow-lg text-center font-semibold hover:bg-[#0e9e6e] transition">
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;

// src/components/ServiceSelectionPanel.js
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const services = [
  { id: 'carpenter', name: 'Carpenter', icon: 'ri-hammer-line', color: 'bg-orange-100 text-orange-600' },
  { id: 'electrician', name: 'Electrician', icon: 'ri-flashlight-line', color: 'bg-yellow-100 text-yellow-600' },
  { id: 'plumber', name: 'Plumber', icon: 'ri-tools-line', color: 'bg-blue-100 text-blue-600' },
  { id: 'painter', name: 'Painter', icon: 'ri-brush-line', color: 'bg-purple-100 text-purple-600' },
  { id: 'technician', name: 'Technician', icon: 'ri-cpu-line', color: 'bg-cyan-100 text-cyan-600' },
  { id: 'cleaner', name: 'Cleaner', icon: 'ri-bubble-chart-line', color: 'bg-green-100 text-green-600' },
];

const ServiceSelectionPanel = ({ onSelect, onBack }) => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    gsap.from(".service-card", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-full flex flex-col">
      <div className="p-6 pb-4">
        <div className="flex items-center mb-6">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <h2 className="ml-4 text-xl font-bold text-gray-800">Select a service</h2>
        </div>
        
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            <i className="ri-search-line"></i>
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-2 border-transparent focus:border-blue-500 focus:outline-none transition-all"
            placeholder="Search services..."
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="grid grid-cols-3 gap-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
              onClick={() => onSelect(service)}
            >
              <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center mb-2`}>
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <span className="text-sm font-medium text-gray-700">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <button 
          className="w-full py-3 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 transition-all"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ServiceSelectionPanel;
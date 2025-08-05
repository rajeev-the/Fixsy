import React from 'react'

const ServiceCard = ({ name, image, rating, basePrice, selected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center justify-between p-4 rounded-lg shadow-md cursor-pointer transition ${
        selected ? 'bg-blue-100 border border-blue-400' : 'bg-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center text-yellow-500 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-right text-sm text-gray-700">
        <p className="font-medium">₹{basePrice}</p>
        <p className="text-xs">Base Price</p>
      </div>
    </div>
  )
}

export default ServiceCard

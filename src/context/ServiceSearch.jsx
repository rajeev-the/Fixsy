import React, { createContext, useContext, useState } from "react";

const initialData = {
  locations: ["Delhi", "Mumbai", "Jaipur"],
  professionals: ["Plumber", "Electrician", "Carpenter"],
  service_providers: [
    {
      name: "Rajeev Kumar",
      phone_number: "9876543210",
      location: "Delhi",
      professional: "Plumber",
      image: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
      rating: 5,
      basePrice: 200,
    },
    {
      name: "Amit Sharma",
      phone_number: "9123456789",
      location: "Mumbai",
      professional: "Electrician",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      basePrice: 220,
    },
    {
      name: "Vikram Singh",
      phone_number: "9988776655",
      location: "Delhi",
      professional: "Electrician",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      basePrice: 180,
    },
    {
      name: "Deepak Mehra",
      phone_number: "8899776655",
      location: "Jaipur",
      professional: "Carpenter",
      image: "https://randomuser.me/api/portraits/men/60.jpg", // dummy image
      rating: 4,
      basePrice: 190,
    },
  ],
};


// ✅ Create Context
const ServiceContext = createContext();

// ✅ Provider Component
export const ServiceProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProfessional, setSelectedProfessional] = useState("");

  // ✅ Filter service providers based on location & profession
  const filteredProviders = initialData.service_providers.filter(
    (provider) =>
      (!selectedLocation || provider.location === selectedLocation) &&
      (!selectedProfessional || provider.professional === selectedProfessional)
  );

  return (
    <ServiceContext.Provider
      value={{
        locations: initialData.locations,
        professionals: initialData.professionals,
        selectedLocation,
        setSelectedLocation,
        selectedProfessional,
        setSelectedProfessional,
        filteredProviders,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

// ✅ Custom Hook to use Context
export const useServiceContext = () => useContext(ServiceContext);

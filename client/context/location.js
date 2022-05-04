import React from "react";

// UTILS
import { getCurrentLocation } from "../utils/getCurrentLocation";
import { getPlaceDetails } from "../utils/getPlaceDetails";

export const LocationContext = React.createContext({
  currentLocation: {
    formattedAddress: "",
    geometry: {
      lat: 0,
      lng: 0,
    },
  },
  dropLocation: {
    formattedAddress: "",
    geometry: {
      lat: 0,
      lng: 0,
    },
  },
  pickUpLocation: {
    formattedAddress: "",
    geometry: {
      lat: 0,
      lng: 0,
    },
  },
  updatePickUpLocation: (searchString) => {},
  updateDropLocation: (searchString) => {},
});

export const LocationContextProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = React.useState({
    formattedAddress: "",
    geometry: {
      lat: 0,
      lng: 0,
    },
  });
  const [pickUpLocation, setPickUpLocation] = React.useState({
    formattedAddress: "",
    geometry: {
      lat: 0,
      lng: 0,
    },
  });
  const [dropLocation, setDropLocation] = React.useState({
    formattedAddress: "",
    geometry: {
      lat: 0,
      lng: 0,
    },
  });

  React.useEffect(() => {
    getCurrentLocation().then((coord) => {
      setCurrentLocation(coord);
      setPickUpLocation(coord);
    });
  }, []);

  const updatePickUpLocation = async (searchString) => {
    const location = await getPlaceDetails(searchString);
    console.log({ location });
    if (location?.place?.geometry) {
      setPickUpLocation({
        geometry: location?.place?.geometry?.location || 0,
        formattedAddress: location?.place?.formatted_address || "",
      });
    }
  };

  const updateDropLocation = async (searchString) => {
    const location = await getPlaceDetails(searchString);
    if (location?.place?.geometry) {
      setDropLocation({
        geometry: location?.place?.geometry?.location || 0,
        formattedAddress: location?.place?.formatted_address || "",
      });
    }
  };

  return (
    <LocationContext.Provider
      value={{
        pickUpLocation,
        dropLocation,
        currentLocation,
        updateDropLocation,
        updatePickUpLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
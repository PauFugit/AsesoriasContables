"use client"

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api"

//Map's styling
const defaultMapContainerStyle = {
  width: "90%",
  height: "40vh",
  borderRadius: "15px 0px 0px 15px"
}

//K2's coordinates
const defaultMapCenter = {
  lat: -23.64766793565001,
  lng: -70.39747667444837
}


//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite"
}

const MapComponent = () => {
  return (
    <div className="w-full mt-20">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  )
}

export { MapComponent }
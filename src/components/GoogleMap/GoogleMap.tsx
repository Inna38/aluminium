import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "590px",
};

const center = {
  lat: 48.5203, // координаты 
  lng: 34.6021 ,
};

export default function MyGoogleMap() {
    console.log(
      "process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ",
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
    );
    
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

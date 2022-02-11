import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

export default function MapContainer() {
  const offices = [
    {
      id: '1',
      field_address: {
        locality: 'Uzhhorod',
        postal_code: '88000',
        address_line1: 'Tymiryazjeva St,',
        address_line2: '15a',
        latitude: 48.636055470455055,
        longitude: 22.30510579630139,
      },
    },
  ];
  const mapRef = React.useRef(null);
  const [selectedOffice, setSelectedOffice] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
  const onLoad = React.useCallback(
    (mapInstance) => {
      const bounds = new google.maps.LatLngBounds();
      offices.forEach((office) => {
        bounds.extend(new google.maps.LatLng(office.field_address.latitude, office.field_address.longitude));
      });
      mapRef.current = mapInstance;
      mapInstance.fitBounds(bounds);
    },
    [offices]
  );
  const onClickMarker = (officeId) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  };
  return (
    <div className="z-50">
      {isLoaded ? (
        <>
          <GoogleMap
            mapContainerClassName="google-map"
            center={{ lat: 48.636055470455055, lng: 22.30510579630139 }}
            zoom={15}
          >
            {offices.map((office) => (
              <Marker
                key={office.id}
                onClick={() => onClickMarker(office.id)}
                position={{
                  lat: office.field_address.latitude,
                  lng: office.field_address.longitude,
                }}
              />
            ))}
            {selectedOffice ? (
              <InfoWindow
                position={{
                  lat: selectedOffice.field_address.latitude,
                  lng: selectedOffice.field_address.longitude,
                }}
                onCloseClick={() => setSelectedOffice(null)}
              >
                <p>
                  {selectedOffice.field_address.address_line1} {selectedOffice.field_address.address_line2} -{' '}
                  {selectedOffice.field_address.postal_code} {selectedOffice.field_address.locality}
                </p>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </>
      ) : null}
    </div>
  );
}

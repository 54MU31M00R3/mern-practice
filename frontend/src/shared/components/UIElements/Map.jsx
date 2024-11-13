import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

import './Map.css'

const Map = (props) => {

    const position = [props.center.lat, props.center.lng];

    const locationIcon = new L.divIcon({
        className: "marker-icon",
        iconSize: [30, 30],
      });

    return (
        <div className={`map ${props.className}`} style={props.style}>
            <MapContainer className='leaflet-container' center={position} zoom={props.zoom} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={locationIcon}>
                    <Popup>
                        I am here!
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
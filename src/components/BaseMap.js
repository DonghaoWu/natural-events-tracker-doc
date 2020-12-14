import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import EventSelector from './EventSelector';
import LocationInfoBox from './LocationInfoBox';

const BaseMap = ({ center, zoom, eventsData }) => {

    const [locationInfo, setLocationInfo] = useState(null);
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState([false, false, false, false]);

    const handleClick = (info) => {
        setLocationInfo(info)
        setShowInfoBox(true);
    }

    const LocationMarkerWrapper = (eventData, coordinates, type, date) => {
        return <LocationMarker key={uuidv4()} type={type} lng={coordinates[0]} lat={coordinates[1]} 
            onClick={() => handleClick({
                id: eventData.id,
                title: eventData.title,
                lng: coordinates[0],
                lat: coordinates[1],
                date: date
            })}
        />
    }

    const markers = eventsData.map(ev => {
        let latestEventIndex = ev.geometries.length - 1;
        let coordinates = ev.geometries[latestEventIndex].coordinates;
        let dateFullFormat = ev.geometries[latestEventIndex].date;
        let indexOfT = dateFullFormat.indexOf('T');
        let date = dateFullFormat.slice(0,indexOfT);
        if (typeof coordinates[0] !== 'number') coordinates = coordinates[0][0];

        if (selectedStatus[0] && ev.categories[0].id === 8) return LocationMarkerWrapper(ev, coordinates, 'fireIcon', date);
        if (selectedStatus[1] && ev.categories[0].id === 12) return LocationMarkerWrapper(ev, coordinates, 'volcanoIcon', date);
        if (selectedStatus[2] && ev.categories[0].id === 15) return LocationMarkerWrapper(ev, coordinates, 'iceIcon', date);
        if (selectedStatus[3] && ev.categories[0].id === 10) return LocationMarkerWrapper(ev, coordinates, 'stormIcon', date);
        return null;
    });

    return (
        <div className='map'>
            <EventSelector setSelectedStatus={setSelectedStatus} selectedStatus={selectedStatus} />
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {
                showInfoBox && <LocationInfoBox info={locationInfo} setShowInfoBox={setShowInfoBox} />
            }
        </div>
    )
}

BaseMap.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 4
}

export default BaseMap;
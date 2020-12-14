import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import EventSelector from './EventSelector';
import { v4 as uuidv4 } from 'uuid';

const BaseMap = ({ center, zoom, eventData }) => {

    const [locationInfo, setLocationInfo] = useState(null);
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [eventType, setEventType] = useState([false, false, false, false]);

    const markers = eventData.map(ev => {
        let data = ev.geometries[0].coordinates;
        if (typeof data[0] !== 'number') data = data[0][0];

        if (eventType[0] && ev.categories[0].id === 8) {
            return <LocationMarker key={uuidv4()} type='fireIcon' lat={data[1]} lng={data[0]}
                onClick={() => {
                    setLocationInfo({ id: ev.id, title: ev.title, lat: data[1], lng: data[0], date: ev.geometries[0].date })
                    setShowInfoBox(true);
                }}
            />
        };
        if (eventType[1] && ev.categories[0].id === 12) {
            return <LocationMarker key={uuidv4()} type='volcanoIcon' lat={data[1]} lng={data[0]}
                onClick={() => {
                    setLocationInfo({ id: ev.id, title: ev.title, lat: data[1], lng: data[0], date: ev.geometries[0].date })
                    setShowInfoBox(true);
                }}
            />
        };
        if (eventType[2] && ev.categories[0].id === 15) {
            return <LocationMarker key={uuidv4()} type='iceIcon' lat={data[1]} lng={data[0]}
                onClick={() => {
                    setLocationInfo({ id: ev.id, title: ev.title, lat: data[1], lng: data[0], date: ev.geometries[0].date })
                    setShowInfoBox(true);
                }}
            />
        };
        if (eventType[3] && ev.categories[0].id === 10) {
            return <LocationMarker key={uuidv4()} type='stormIcon' lat={data[1]} lng={data[0]}
                onClick={() => {
                    setLocationInfo({ id: ev.id, title: ev.title, lat: data[1], lng: data[0], date: ev.geometries[0].date })
                    setShowInfoBox(true);
                }}
            />
        };
        return null;
    });
    console.log(process.env.REACT_APP_GOOGLE_API);
    return (
        <div className='map'>
            <EventSelector setEventType={setEventType} eventType={eventType} />
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
import { Icon } from '@iconify/react';
import fireIcon from '@iconify-icons/zmdi/fire';
import iceShelf from '@iconify-icons/openmoji/ice-shelf';
import volcanoIcon from '@iconify-icons/fxemoji/volcano';
import thunderstormSevere from '@iconify-icons/carbon/thunderstorm-severe';

const LocationMarker = ({ type, handleShowInfo }) => {
    let locationIcon = '';

    switch (type) {
        case 'fireIcon':
            locationIcon = fireIcon;
            break;
        case 'volcanoIcon':
            locationIcon = volcanoIcon;
            break;
        case 'iceIcon':
            locationIcon = iceShelf;
            break;
        case 'stormIcon':
            locationIcon = thunderstormSevere;
            break;
        default:
            locationIcon = '';
    }

    return (
        <div className='location-marker' onClick={handleShowInfo}>
            <Icon icon={locationIcon} className={`${type} mapMarkerIcon`} />
        </div>
    )
}

export default LocationMarker;
import { Icon } from '@iconify/react';
import closeFilled from '@iconify-icons/carbon/close-filled';

const LoactionInfoBox = ({ info, setShowInfoBox }) => {
    return (
        <div className='location-info'>
            <div className='close-infoBox' >
                <h2>Location Info:</h2>
                <Icon icon={closeFilled} onClick={() => setShowInfoBox(false)} />
            </div>
            <ul>
                <li>Event ID: <strong>{info.id}</strong></li>
                <li>Date: <strong>{info.date}</strong></li>
                <li>Longitude: <strong>{info.lng}</strong></li>
                <li>Latitude: <strong>{info.lat}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>

            </ul>
        </div>
    )
}

export default LoactionInfoBox;
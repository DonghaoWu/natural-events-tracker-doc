import { Icon } from '@iconify/react';
import fireIcon from '@iconify-icons/zmdi/fire';
import iceShelf from '@iconify-icons/openmoji/ice-shelf';
import volcanoIcon from '@iconify-icons/fxemoji/volcano';
import thunderstormSevere from '@iconify-icons/carbon/thunderstorm-severe';

const EventSelector = ({ setSelectedStatus, selectedStatus }) => {

    const handleClick = (eventName) => {
        let newArr = selectedStatus.slice();
        if (eventName === 'Wildfires') newArr[0] = !selectedStatus[0];
        if (eventName === 'Volcanoes') newArr[1] = !selectedStatus[1];
        if (eventName === 'Sea and Lake Ice') newArr[2] = !selectedStatus[2];
        if (eventName === 'Severe Storms') newArr[3] = !selectedStatus[3];
        setSelectedStatus(newArr);
    }

    return (
        <div className='event-selectorBox'>
            <h2>Natural Event Type:</h2>
            <ul>
                <li>
                    <div>
                        <Icon icon={fireIcon} className='fireIcon selectorIcon' />Wildfires
                    </div>
                    <input type='checkbox' onClick={() => handleClick('Wildfires')} />
                </li>
                <li>
                    <div>
                        <Icon icon={volcanoIcon} className='iceIcon selectorIcon' />Volcanoes
                    </div>
                    <input type='checkbox' onClick={() => handleClick('Volcanoes')} />
                </li>
                <li>
                    <div>
                        <Icon icon={thunderstormSevere} className='stormIcon selectorIcon' />Severe Storms
                    </div>
                    <input type='checkbox' onClick={() => handleClick('Severe Storms')} />
                </li>
                <li>
                    <div>
                        <Icon icon={iceShelf} className='volcanoIcon selectorIcon' />Sea and Lake Ice
                    </div>
                    <input type='checkbox' onClick={() => handleClick('Sea and Lake Ice')} />
                </li>
            </ul>
        </div>
    )
}

export default EventSelector;
import { Icon } from '@iconify/react';
import fireIcon from '@iconify-icons/zmdi/fire';
import iceShelf from '@iconify-icons/openmoji/ice-shelf';
import volcanoIcon from '@iconify-icons/fxemoji/volcano';
import thunderstormSevere from '@iconify-icons/carbon/thunderstorm-severe';

const EventSelector = ({ setEventType, eventType }) => {

    const handleClick = (eventName) => {
        let newArr = eventType.slice();
        if(eventName === 'Wildfires') newArr[0] = !eventType[0];
        if(eventName === 'Volcanoes') newArr[1] = !eventType[1];
        if(eventName === 'Sea and Lake Ice') newArr[2] = !eventType[2];
        if(eventName === 'Severe Storms') newArr[3] = !eventType[3];
        setEventType(newArr);
    }
    
    return (
        <div className='event-selector'>
            <h2>Natural Event Type:</h2>
            <ul>
                <li>
                    <div>
                        <Icon icon={fireIcon} className='fireIcon selectorIcon' />Wildfires
                    </div>
                    <input type='checkbox' onClick={()=>handleClick('Wildfires')} />
                </li>
                <li>
                    <div>
                        <Icon icon={volcanoIcon} className='iceIcon selectorIcon' />Volcanoes
                    </div>
                    <input type='checkbox' onClick={()=>handleClick('Volcanoes')} /></li>
                <li>
                    <div>
                        <Icon icon={iceShelf} className='volcanoIcon selectorIcon' />Sea and Lake Ice
                    </div>
                    <input type='checkbox' onClick={()=>handleClick('Sea and Lake Ice')} />
                </li>
                <li>
                    <div>
                        <Icon icon={thunderstormSevere} className='stormIcon selectorIcon' />Severe Storms
                    </div>
                    <input type='checkbox' onClick={()=>handleClick('Severe Storms')} />
                </li>
            </ul>
        </div>
    )
}

export default EventSelector;
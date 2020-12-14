import { Icon } from '@iconify/react';
import globeEarth from '@iconify-icons/wpf/globe-earth';

const Header = () => {
    return (
        <header className='header'>
            <h1><Icon icon={globeEarth} className='header-icon'/>Natural Events Tracker (Power By NASA)</h1>
        </header>
    )
}

export default Header;
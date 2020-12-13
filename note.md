1. react, google map, nasa api
2. loader, spinner
3. google-map react

4. nasa open api - eonet: natural event metadata, api link
5. google map react
6. google maps API key from google map website
7. inconify

8. initiation

```bash
$ npx creact-react-app .
$ npm i google-map-react @iconify/react @iconify/icons-mdi
$ npm start
```

9. clean up

    - index.html change title
    - delete some files

10. component folder
11. component/Map.js
12. rafce
13. 
```jsx
import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({center, zoom})=>{

    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map(ev=>{
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onCLick={()=>{
                setLocationInfo({id: ev.id, title:ev.title})
            }}/>
        };
        return null;
    });

    return(
        <div className='map'>
        <GoogleMapReact 
            bootstrapURLKeys={{key:'api key'}}
            defaultCenter={ center }
            defaultoom={ zoom}>
            {markers}
        <GoogleMapReact>
        {
            locationInfo && <LocationInfoBox info={locationInfo} />
        }
        </div>
    )
}

Map.defaultProps = {
    center:{
        lat:42.3265,
        lng:-122.8756
    },
    zoom: 6
}

export default Map;
```

```jsx
import Map from './components/Map';
import {useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';

const App = ()=>{
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchEvents = async()=>{
            setLoading(true);
            const res = await fetch('url');
            const {events} = await res.json();

            setEventData(events);
            setLoading(false);
        }

        fetchEvents();
    },[])
    return(
        <div>
        <Header/>
            { !loading ? <Map eventData={eventData} /> : <Loader />};
        </div>
    )
}

export default App;
```

```css
body{
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    overflow:hidden;
}

.map{
    width: 100vw;
    height:100vh;
    position:relative;
}

.location-icon{
    font-size:2rem;
    color: red;  
}

.loader{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height: 100vh;
    opacity:
}

.loader img{
    width:400px;
}

.loader h1{
    margin-top: -100px;
}

.location-info{
    position:absulute;
    top:80px;
    right: 50px;
    width:400px;
    min-height:200px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius:10px;
    font-size:18px;
    color:white;
}

.location-info ul{
    list-style-type:none;
    padding:0;
}

.location-info li{
    padding: 5px 0;
}

.header{
    padding:10px;
    background-color:firebrick;
    color:white;
    position:fixed;
    top:0;
    right:0;
    left:0;
    z-index:100;
}

.header h1{
    font-size: 25px;
    padding:0;
    margin:0;
    text-align:center;
}
```

14. LocationMarker.js

```jsx
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick })=>{
    return(
        <div className='location-marker' onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker;
```

15. Loader
```jsx
import spinner from './spinner.gif';

const Loader = ()=>{
    return(
        <div className='loader'>
            <img src={spinner} alt='loading' />
            <h1>Fetching data</h1>
        </div>
    )
}

export default Loader;
```

16. LocationInfoBox.js

```js
const LoactionInfoBox = ({info})=>{
    return(
        <div className='location-info'>
        <h2>Event Location Info</h2>

        <ul>
            <li>ID: <strong>{info.id}</strong></li>
            <li>TITLE: <strong>{info.title}</strong></li>
        </ul>
        </div>
    )
}

export default LoactionInfoBox;
```

```jsx
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = ()=>{
    return(
        <header className='header'>
        <h1><Icon icon={locationIcon}/>Wildfire Tracker (Power By NASA)</h1>
        </div>
    )
}

export default Header;
```
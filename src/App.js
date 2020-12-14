import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import BaseMap from './components/BaseMap';

import './App.css';

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }
    fetchEvents();
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <BaseMap eventData={eventData} /> : <Loader />};
    </div>
  )
}

export default App;

import React from 'react';
import './App.css';
import { useBinaryClock } from './useBinaryClock';
import { Binary } from './Binary';
import { Footer } from './Footer';

function App() {
  const { hours, mins, secs } = useBinaryClock();

  return (
    <div className="app">
      <Binary className="hours" value={hours} />
      <Binary className="mins" value={mins} />
      <Binary className="secs" value={secs} />
      <Footer />
    </div>
  );
}

export default App;

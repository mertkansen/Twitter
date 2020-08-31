import React from 'react';
import './App.css';

import { Feed, Sidebar, Widgets } 
from './Components/Home'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;

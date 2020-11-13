import React from 'react'
import './App.css';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">
      <h1>Bar</h1>
      <div className="app__body">
        {/* SideBar */}
        <Sidebar/>
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;

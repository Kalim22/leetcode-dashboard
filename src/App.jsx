import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  const [showSideMenu, setShowSideMenu] = useState(false)
  return (
    <section className='app'>
      <Sidebar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu}/>
      <Dashboard showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu}/>
    </section>
  );
};

export default App;

import { Routes, Route } from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext';
import { useState } from 'react';

import Login from './components/LoginPage/LoginPage';
import Gallery from './components/GalleryPage/GalleryPage';


import './App.css';

function App() {
  const [username, setUsername] = useState('');

  return (

    <div className="App">
      <LoginContext.Provider value={{username, setUsername}}>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

      </LoginContext.Provider>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <main className='w-screen h-screen overflow-x-hidden'>
      <NavBar/>
      <Home/>
    </main>
  );
}

export default App;

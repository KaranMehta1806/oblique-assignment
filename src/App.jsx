import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layout/publicLayout';
import Home from './pages/HomePage';

function App() {

  return (
    <>

    <Routes>
       <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
              </Route>
    </Routes>

    </>
  )
}

export default App

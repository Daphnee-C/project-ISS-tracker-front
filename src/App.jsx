import { useState } from 'react'
import APOD from "./components/APOD";
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold py-6">ISS Tracker 🛰️</h1>
      <APOD />
    </div>
      
      
    </>
  )
}

export default App

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full animate-fade-in overflow-x-hidden'>
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App

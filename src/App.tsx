import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full animate-fade-in overflow-x-hidden'>
        <Banner />
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App

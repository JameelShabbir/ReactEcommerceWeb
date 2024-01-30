import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavItem from './components/NavItem'
import Footer from './components/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavItem />
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App

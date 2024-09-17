//REACT
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify"

//HOOKS

//COMPONENTS
import Navbar from './components/Navbar'

//CONTEXT 

// STYLE
import './App.css'
import 'react-toastify/ReactToastify.css'

function App() {

  return (
    <div className='App'>
      <ToastContainer/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App

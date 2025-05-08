import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import Navbar from './Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
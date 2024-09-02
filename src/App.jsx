
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import CreateUsers from './Components/CreateUsers'
import DashBoard from './Components/DashBoard'
import Home from './Components/Home'

function App() {

  return (
    <>
    <BrowserRouter>
  <Routes>
  <Route path="/home/users" element={<Home/>}/>
  <Route exact path='/' element={<DashBoard/>}/>
  <Route path="/add/users" element={<CreateUsers/>}/>   
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

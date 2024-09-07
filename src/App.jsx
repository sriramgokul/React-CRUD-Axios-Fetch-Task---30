
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import CreateUsers from './Components/CreateUsers'
import DashBoard from './Components/DashBoard'
import Home from './Components/Home'
import { useState } from 'react'
import Update from './Components/Update'

function App() {

  const [newdetails,setNewDetails] = useState([]);

  return (
    <div>
    <BrowserRouter>
  <Routes>
  <Route path="/home/users" element={<Home newdetails={newdetails} setNewDetails={setNewDetails} />}/>
  <Route exact path="/" element={<DashBoard newdetails={newdetails} setNewDetails={setNewDetails} />}/>
  <Route path="/add/users" element={<CreateUsers newdetails={newdetails} setNewDetails={setNewDetails} />}/> 
  <Route path='/update/users/:id' element={<Update newdetails={newdetails} setNewDetails={setNewDetails}/>}/>  
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App

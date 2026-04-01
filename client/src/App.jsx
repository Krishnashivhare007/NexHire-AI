import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      

    </Routes>
  )
}

export default App

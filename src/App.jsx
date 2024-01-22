import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import NotFound from './pages/notFound/index'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App

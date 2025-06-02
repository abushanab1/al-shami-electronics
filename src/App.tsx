import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import DeviceGrading from './pages/DeviceGrading'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/device-grading" element={<DeviceGrading />} />
        </Routes>
      </main>
    </>
  )
}

export default App

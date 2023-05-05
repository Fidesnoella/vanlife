import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./server"
import PageLayout from './components/layout/PageLayout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/layout/HostLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

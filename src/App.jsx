import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./server"
import PageLayout from './components/layout/PageLayout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans.jsx'
import VanDetail from './pages/VanDetail.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

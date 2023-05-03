import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout.jsx'
import About from './components/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

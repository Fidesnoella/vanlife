import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import "./server"
import PageLayout from './components/layout/PageLayout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans, { loader as vansLoader } from './pages/Vans/Vans.jsx'
import VanDetail, { loader as VanDetailLoader } from './pages/Vans/VanDetail.jsx'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/layout/HostLayout'
import HostVans, { loader as HostVansLoader } from "./pages/Host/Vans"
import VanDetailLayout, { loader as HostDetailLoader } from './components/layout/VanDetailLayout'
import VanInfo from './pages/Host/VanInfo'
import VanPrice from './pages/Host/VanPrice'
import VanPhotos from './pages/Host/VanPhotos'
import Notfound from './pages/Notfound'
import Error from './components/layout/Error'
import Login, { loader as loginLoader, action as loginAction } from './pages/Login'
import { requireAuth } from './utils'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path='login' loader={loginLoader} action={loginAction} element={<Login />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />}
        loader={vansLoader} errorElement={<Error />} />
      <Route path='vans/:id' loader={VanDetailLoader} element={<VanDetail />}
        errorElement={<Error />} />

      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path='income' element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path='vans' loader={HostVansLoader} element={<HostVans />} errorElement={<Error />} />
        <Route path='vans/:id' loader={HostDetailLoader} element={<VanDetailLayout />} errorElement={<Error />}>
          <Route index element={<VanInfo />} loader={async ({ request }) => await requireAuth(request)} />
          <Route path='price' element={<VanPrice />} loader={async ({ request }) => await requireAuth(request)} />
          <Route path='photos' element={<VanPhotos />} loader={async ({ request }) => await requireAuth(request)} />
        </Route>
        <Route path='reviews' element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App

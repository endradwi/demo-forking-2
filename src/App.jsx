
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './pages/footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/footer',
    element: <Footer />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
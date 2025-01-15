
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Profile from './pages/Profile'
import Test from "./pages/Test";
import Footer from './pages/footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: '/footer',
    element: <Footer />
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

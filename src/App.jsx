import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Profile from './pages/Profile'
import Test from "./pages/Test";

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
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

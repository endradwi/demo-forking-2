import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user',
    element: <User />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
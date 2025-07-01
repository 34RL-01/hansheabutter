import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'


const nkoto = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },


])

const App = () => {
  return (
    <div>
      <RouterProvider router={nkoto} />
    </div>
  )
}

export default App

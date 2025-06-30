import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/home'


const nkoto = createBrowserRouter([
  {
    path:"/home",
    element: <Home/>
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

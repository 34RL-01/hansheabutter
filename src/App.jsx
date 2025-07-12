import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { lazy, Suspense } from 'react';
import Layout from './Layout';
import { HelmetProvider } from 'react-helmet-async';
// import Home from './pages/Home'
// import ContactUs from './pages/Contact'

const Home = lazy(() => import('./pages/Home'));
const ContactUs = lazy(() => import('./pages/Contact'));
// const About = lazy(() => import('./pages/About'));
// const Products = lazy(() => import('./pages/Products'));
// const Benefits = lazy(() => import('./pages/Benefits'));


const nkoto = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Suspense fallback={<div className="text-center mt-20">Loading Home...</div>}>
          <Home />
        </Suspense>
      </Layout>
    )
  },
  {
    path: "/Home",
    element: (
      <Layout>
        <Suspense fallback={<div className="text-center mt-20">Loading Home...</div>}>
          <Home />
        </Suspense>
      </Layout>
    )
  },
  // {
  //   path: "/about",
  //   element: (
  //     <Suspense fallback={<div>Loading About...</div>}>
  //       <About />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/products",
  //   element: (
  //     <Suspense fallback={<div>Loading Products...</div>}>
  //       <Products />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/benefits",
  //   element: (
  //     <Suspense fallback={<div>Loading Benefits...</div>}>
  //       <Benefits />
  //     </Suspense>
  //   ),
  // },
  {
    path: "/ContactUs",
    element: (
      <Suspense fallback={<div className="text-center mt-20">Loading Contact Page...</div>}>
        <ContactUs />
      </Suspense>
    )
  },


])

const App = () => {
  return (
    <div>
      <HelmetProvider>
        <RouterProvider router={nkoto} />
      </HelmetProvider>
    </div>
  )
}

export default App

import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';
import BrandedLoader from './component/BrandedLoader';

const Home = lazy(() => import('./pages/Home'));
const ContactUs = lazy(() => import('./pages/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/home',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
]);

const App = () => {
  return (
    <Suspense fallback={<BrandedLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;

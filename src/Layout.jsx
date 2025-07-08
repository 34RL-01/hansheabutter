import React from 'react';
import ScrollToTop from './component/ScrollToTop';

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

export default Layout;
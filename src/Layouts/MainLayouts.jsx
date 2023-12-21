import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayouts = () => {
  return (
    <div className=' max-w-5xl mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayouts = () => {
  return (
    <div className=' md:grid grid-cols-12'>
      <div className=' col-span-3'>
        <Sidebar />
      </div>
      <div className=' col-span-9'>
         <Outlet />
     </div>
    </div>
  );
};

export default DashboardLayouts;
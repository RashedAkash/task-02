import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayouts = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
         <Outlet />
     </div>
    </div>
  );
};

export default DashboardLayouts;
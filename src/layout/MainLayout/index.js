import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from './Drawer';
import Header from './Header';

const MainLayout = () => {
  const [customOpen, setCustomOpen] = useState(false);

  return (
    <>
      <Header setCustomOpen={setCustomOpen} customOpen={customOpen} />
      <Drawer setCustomOpen={setCustomOpen} customOpen={customOpen} />

      <div className="dash_main_conent_wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

// src/layout/MainLayout.js
import Sidebar from '../layout/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex bg-[#020202e5] py-4 px-2 overflow-hidden">
      <Sidebar />
      <div className="flex-grow overflow-x-hidden overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

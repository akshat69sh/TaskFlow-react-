import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Sidebar from "../Components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex flex-1 flex-col p-3 sm:p-6 gap-4 sm:gap-6 min-w-0 overflow-y-auto">
          <Header />

          <main className="flex flex-1 h-full min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
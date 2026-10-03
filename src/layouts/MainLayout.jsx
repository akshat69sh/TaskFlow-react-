import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Sidebar from "../Components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex flex-1 flex-col p-6 gap-6">
          <Header />

          <main className="flex flex-1 h-full  ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

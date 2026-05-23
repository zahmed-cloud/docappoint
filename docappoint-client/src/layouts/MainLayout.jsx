import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";

const MainLayout = () => {

  return (

    <div className="min-h-screen flex flex-col bg-[#f4fbff] dark:bg-[#0f172a] duration-300 overflow-x-hidden">

      <Navbar />

      <main className="flex-grow w-full">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Outlet />
        </div>

      </main>

      <Footer />

    </div>

  );

};

export default MainLayout;
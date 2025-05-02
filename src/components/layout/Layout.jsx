import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        © {new Date().getFullYear()} School Gradebook System
      </footer>
    </div>
  );
};

export default Layout;

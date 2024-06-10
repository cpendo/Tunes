import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const Layout = () => (
  <div className="bg-blue-dark flex flex-col lg:flex-row gap-3 px-3 pt-3 min-h-screen max-w-screen text-white">
    <Navbar />
    <Outlet />
    <Sidebar />
  </div>
);

export default Layout;

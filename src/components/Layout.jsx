import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { MusicPlayer, Sidebar } from "../components";
import Sidenav from "./Navbar/Sidenav";
import Topnav from "./Navbar/Topnav";

const Layout = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="min-h-screen max-w-screen">
      <div className={`bg-blue-dark flex flex-col lg:flex-row gap-3 px-3 pt-3 min-h-screen max-w-screen text-white `}>
        {isLargeScreen ? <Sidenav /> : <Topnav />}
        <Outlet />
        <Sidebar />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Layout;

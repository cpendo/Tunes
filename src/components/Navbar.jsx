import { useMediaQuery } from "react-responsive";
import Sidenav from "./navbar/Sidenav";
import Topnav from "./navbar/Topnav";


const Navbar = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return <>{isLargeScreen ? <Sidenav /> : <Topnav />}</>;
};

export default Navbar;

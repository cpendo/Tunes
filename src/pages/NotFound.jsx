import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/music-xl.png";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div className="bg-blue-dark min-h-screen max-w-screen flex flex-col justify-center items-center font-primary">
      <img src={Logo} alt="logo" className="md:w-1/6 h-1/3 w-2/6   object-cover" />
      <h1 className="text-white font-black text-5xl sm:text-7xl">
        Page not Found
      </h1>
      <p className="text-white  text-lg sm:text-2xl">
        The page you were looking for doesn&apos;t exist
      </p>
      <button className="bg-blue-light font-bold mt-2 p-2 text-3xl rounded-md">
        <Link to="/"> Home</Link>
      </button>
    </div>
  );
};

export default NotFound;

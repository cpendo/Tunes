import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../assets/constants";
import Logo from "../../assets/music-xl.png";

const Topnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="bg-blue w-full flex flex-row justify-between items-center text-white py-3 px-4">
        <div className="font-primary font-black ">
          <Link to="/" className="flex flex-row gap-2 items-center">
            <img src={Logo} alt="logo" className="w-14" />
            <h1 className="text-4xl">Tunes</h1>
          </Link>
        </div>

        <button
          className="hover:text-orange p-2 rounded-md"
          onClick={handleClick}
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
      </div>

      <div
        className={`bg-blue-light absolute z-10 right-5 top-28 p-4 text-black ${
          !menuOpen && "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 font-primary font-bold">
          {links?.map((link, i) => (
            <li key={i} onClick={handleClick}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center hover:text-blue-dark ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <i className={`fa-solid fa-${link.icon} fa-lg w-8`}></i>
                <span className="text-lg">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topnav;

import { Link, NavLink } from "react-router-dom";
import { links } from "../../assets/constants";
import Logo from "../../assets/music-xl.png";

const Sidenav = () => {
  return (
    <div className="bg-blue lg:basis-1/6">
      <div className="font-primary font-black mt-2 ">
        <Link
          to="/"
          className="flex flex-row gap-2 items-center justify-center"
        >
          <img src={Logo} alt="logo" className="w-11" />
          <h1 className="text-4xl">Tunes</h1>
        </Link>
      </div>

      <div className="mt-7 ms-4">
        <ul className="flex flex-col gap-3 font-primary font-bold">
          {links?.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `flex items-center hover:text-blue-light ${isActive ? 'active' : ''}`}
              >
                <i className={`fa-solid fa-${link.icon} fa-lg w-8`}></i>
                <span className="text-xl">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;

import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  useContext,
} from "react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

import {
  AuthContext,
} from "../../providers/AuthProvider";

const Navbar = () => {

  const {
    user: loggedUser,
    logoutUser,
  } = useContext(AuthContext);

  const handleLogout = () => {

    logoutUser();

  };

  const navLinkClass = ({
    isActive,
  }) =>
    isActive
      ? "text-sky-500 font-bold"
      : "text-gray-700 dark:text-gray-200 hover:text-sky-500 duration-200";

  const links = (
    <>
      <li>

        <NavLink
          to="/"
          className={navLinkClass}
        >
          Home
        </NavLink>

      </li>

      <li>

        <NavLink
          to="/appointments"
          className={navLinkClass}
        >
          Appointments
        </NavLink>

      </li>

      <li>

        <NavLink
          to="/dashboard/my-bookings"
          className={navLinkClass}
        >
          Dashboard
        </NavLink>

      </li>
    </>
  );

  return (

    <div className="navbar bg-white dark:bg-[#0f172a] shadow-md px-4 md:px-8 duration-300">

      <div className="navbar-start">

        <div className="dropdown lg:hidden">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-2xl text-black dark:text-white"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white dark:bg-[#1e293b] rounded-box w-52"
          >
            {links}
          </ul>

        </div>

        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-sky-500"
        >
          DocAppoint
        </Link>

      </div>

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {links}
        </ul>

      </div>

      <div className="navbar-end flex items-center gap-2 md:gap-3">

        <ThemeToggle />

        {
          loggedUser ? (
            <>

              <Link
                to="/dashboard/my-profile"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-sky-300 flex items-center justify-center text-xl bg-white dark:bg-[#1e293b] dark:text-white flex-shrink-0"
              >
                👤
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-sm md:btn-md bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl px-3 md:px-5"
              >
                Logout
              </button>

            </>
          ) : (
            <>

              <Link
                to="/login"
                className="btn btn-sm md:btn-md border-sky-300 text-sky-500 hover:bg-sky-500 hover:text-white rounded-xl px-3 md:px-5"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-sm md:btn-md bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl px-3 md:px-5"
              >
                Register
              </Link>

            </>
          )
        }

      </div>

    </div>

  );

};

export default Navbar;

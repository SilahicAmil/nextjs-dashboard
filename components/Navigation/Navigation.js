import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/new-ticket">New Ticket</Link>
            </li>
            <li>
              <Link href="/user-profile">User Profile</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-2xl hover:bg-black">
            Takeya Ticket
          </a>
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle" name="dark mode button">
          <MdOutlineDarkMode className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;

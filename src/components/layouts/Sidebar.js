import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import "./Navbar.css";
import {mainPages, general} from '../layouts/sidebarList'
import logo from '../assets/logo.svg'
import dashboard from '../assets/dashboard.svg'
import balance from '../assets/balance.svg'
import customers from '../assets/customers.svg'
const Sidebar = () => {
  return (
    <nav className="col-md-2 side-bar p-0">
      <div className="sidebar-sticky">
        <Link className="logo-link" to="/dashboard">
          <span className="img-wrap">
            <img src={logo} alt="Company Logos" />
          </span>
        </Link>
        <ul className=" list-wrap flex-row-sm">
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  <span>
               <img  src={dashboard}/>
                  </span>{" "}
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                <span>
               <img  src={balance}/>
                  </span>{" "}
                  <span>Balances</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                <span>
               <img  src={customers}/>
                  </span>{" "}
                  <span>Customers</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10px"
                      height="14px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </span>{" "}
                  <span>Analytics</span>
                </NavLink>
              </li>

      </ul>
      </div>
    </nav>
  );
};

export default Sidebar;

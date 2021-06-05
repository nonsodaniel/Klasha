import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import dashboard from "../assets/dashboard.svg";
import balance from "../assets/balance.svg";
import customers from "../assets/customers.svg";
import settings from "../assets/settings.svg";
import team from "../assets/team.svg";
import call from "../assets/Call.svg";
import logout from "../assets/Logout.svg";

const SideBarItem = () => {
  return (
    <div className="sidebar-sticky">
      <div className="top-wrap">
        <Link className="logo-link" to="#">
          <span className="img-wrap">
            <img src={logo} alt="Company Logos" />
          </span>
        </Link>
        <span>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </div>
      <ul className=" list-wrap flex-row-sm">
        <li className="list__title">Main pages</li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <span>
              <img src={dashboard} alt="sidebar__icon" />
            </span>{" "}
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/balances">
            <span>
              <img src={balance} alt="sidebar__icon" />
            </span>{" "}
            <span>Balances</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <span>
              <img src={customers} alt="sidebar__icon" />
            </span>{" "}
            <span>Customers</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
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
          </Link>
        </li>
      </ul>

      <ul className=" list-wrap flex-row-sm">
        <li className="list__title">General</li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <span>
              <img src={settings} alt="sidebar__icon" />
            </span>{" "}
            <span>Settings</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <span>
              <img src={team} alt="sidebar__icon" />
            </span>{" "}
            <span>Team</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <span>
              <img src={call} alt="sidebar__icon" />
            </span>{" "}
            <span>Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <span>
              <img src={logout} alt="sidebar__icon" />
            </span>{" "}
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarItem;

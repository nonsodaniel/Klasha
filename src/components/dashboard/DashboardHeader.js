import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
      <div className="left-header">
        <h5 className="h2">Balances</h5>
        <p>Today, 19th October 2020</p>
      </div>

      <div className="right-header">
        <ul className="d-flex">
          <li className="list__items">
            <Link></Link>
          </li>
          <li className="list__items">
            <Link></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHeader;

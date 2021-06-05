import { Link } from "react-router-dom";
import notification from "../assets/Notification.svg";
import avatar from "../assets/avatar.svg";

const DashboardHeader = () => {
  return (
    <div className="d-flex dashboard-header flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
      <div className="left-header">
        <h5 className="bals__text">Balances</h5>
        <p className="bals__date">Today, 19th October 2020</p>
      </div>

      <div className="right-header">
        <ul className="d-flex list-wrap">
          <li className="list__items">
            <Link className="notif__link" to="#">
              <span className="notif__rounded"></span>
              <img
                src={notification}
                className="notif__img"
                alt="Notification icon"
              />
            </Link>
          </li>
          <li className="list__items">
            <Link className="avatar__link" to="#">
              <img src={avatar} className="avatar__img" alt="User Avatar" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHeader;

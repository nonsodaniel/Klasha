import React from "react";
import searchIcon from "../assets/Search.svg";

const DashboardFilter = () => {
  return (
    <div className="payout-filter">
      <h5 className="payout__text">Payout table</h5>
      <div className="search-wrap">
        <form className="filter__form">
          <div className="form-group search__wrap">
            <input
              type="text"
              className="form-control search__input"
              id="search"
              aria-describedby="emailHelp"
              placeholder="Search something..."
            />
            <span className="search__icon">
              <img src={searchIcon} alt="searc-icon" />
            </span>
          </div>
          <div className="form-group date__wrap">
            <input
              type="date"
              className="form-control filter__date"
              id="date"
              aria-describedby="date"
            />
          </div>
          <button type="submit" className="btn btn__payout">
            Payout
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardFilter;

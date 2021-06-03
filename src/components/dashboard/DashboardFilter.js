import React from "react";

const DashboardFilter = () => {
  return (
    <div className="payout-filter">
      <h6>Payout table</h6>
      <div className="search-wrap">
        <form className="filter__form">
          <div className="form-group search__wrap">
            <input
              type="text"
              className="form-control search"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search something..."
            />
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardFilter;

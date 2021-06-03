import DashboardHeader from "./DashboardHeader";
import DashboardBalances from "./DashboardBalances";
import "./dashboard.scss";
import DashboardFilter from "./DashboardFilter";
const Dashboard = () => {

  return (
    <div className="main-content">
      <DashboardHeader />
      <DashboardFilter />
      <DashboardBalances />
      <div className="table-responsive ">
        <table className="table borderless">
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Source</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_data) => {
              return (
                <tr key={Math.random()}>
                  <td>KLA12578DHQ</td>
                  <td>Vel pellentesque ornare</td>
                  <td>25th November, 2020</td>
                  <td>$1,200</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

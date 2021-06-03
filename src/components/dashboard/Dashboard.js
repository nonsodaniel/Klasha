import DashboardHeader from "./DashboardHeader";
import DashboardBalances from "./DashboardBalances";
import "./dashboard.scss";
import DashboardFilter from "./DashboardFilter";
import DashboardTable from "./DashboardTable";
const Dashboard = () => {

  return (
    <div className="main-content">
      <DashboardHeader />
      <DashboardFilter />
      <DashboardBalances />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;

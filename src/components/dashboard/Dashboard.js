import DashboardHeader from "./DashboardHeader";
import DashboardBalances from "./DashboardBalances";
import "./dashboard.scss";
import DashboardFilter from "./DashboardFilter";
import DashboardTable from "./DashboardTable";
import Wallet from "./Wallet";
const Dashboard = () => {

  return (
    <div className="main-content">
      <DashboardHeader />
      <Wallet />
      <DashboardFilter />
      <DashboardBalances />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;

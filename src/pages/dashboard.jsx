import Card from "../components/elements/Card";
import MainLayout from "../components/layouts/MainLayout";
import CardBill from "../components/fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/fragments/Dashboard/CardTransaction";
import CardBalance from "../components/fragments/Dashboard/CardBalance";
import CardStatistic from "../components/fragments/Dashboard/CardStatistic";
import CardGoal from "../components/fragments/Dashboard/CardGoal";


const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
      <CardBalance />
        <CardGoal  />
        {/* upcoming bill */}
        <CardBill />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* recent transactions */}
        <CardTransaction />

        <CardStatistic />

        {/* expenses break down */}
        <CardExpenseBreakdown />
      </div>
  {/* bottom content end*/}
  </MainLayout>
  );
};

export default DashboardPage;
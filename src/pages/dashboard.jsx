import Card from "../components/elements/Card";
import MainLayout from "../components/layouts/MainLayout";
import CardBill from "../components/fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/fragments/Dashboard/CardTransaction";



const DashboardPage = () => {
  
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" className="col-span-1" />
        <Card title="Goals" className="col-span-1" />
        {/* upcoming bill */}
        <CardBill />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        {/* recent transactions */}
        <CardTransaction />

        <Card variant="md:col-span-2" title="Statistics"></Card>

        {/* expenses break down */}
        <CardExpenseBreakdown />
      </div>
  {/* bottom content end*/}
  </MainLayout>
  );
};

export default DashboardPage;
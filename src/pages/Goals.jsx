import CardGoal from "../components/elements/Card/CardGoal";
import MainLayout from "../components/layouts/MainLayout";
import CardCategory from "../components/fragments/CardCategory";
const Goals = () => {
    return (
      <MainLayout type="goals">
        <CardCategory />
        <CardGoal />
      </MainLayout>
    );
  };

export default Goals;
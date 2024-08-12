import DashboardComponent from "@/components/dashboard/DashboardComponent";

const DashboardContent = async () => {

  return (
    <div className="flex-1 md:ml-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <DashboardComponent />
    </div>
  );
};

export default DashboardContent;

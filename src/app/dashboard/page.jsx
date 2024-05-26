import DashboardComponent from "@/components/dashboard/DashboardComponent";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

const DashboardContent = async () => {
  const session = await auth();

  if(!session) {
    redirect('/login');
  }
 
  return (
    <div className="flex-1 ml-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <DashboardComponent />
    </div>
  );
};

export default DashboardContent;

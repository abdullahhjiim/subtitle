import Sidebar from "@/components/dashboard/Sidebar";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";


const Dashboard = async ({children}) => {
  const session = await auth();

  if(!session?.user) {
    redirect('/login')
  }
  return (
    <div className="container mx-auto p-8 flex min-h-[90vh]">
      <Sidebar />
      {children}
    </div>
  );
};

export default Dashboard;

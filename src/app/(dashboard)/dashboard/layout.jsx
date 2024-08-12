import Sidebar from "@/components/dashboard/Sidebar";


const Dashboard = async ({children}) => {
 
  return (
    <div className="container mx-auto p-8 md:flex min-h-[90vh]">
      <Sidebar />
      {children}
    </div>
  );
};

export default Dashboard;

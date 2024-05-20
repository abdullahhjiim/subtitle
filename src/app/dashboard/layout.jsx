import Sidebar from "@/components/dashboard/Sidebar";


const Dashboard = ({children}) => {
  return (
    <div className="container mx-auto p-8 flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default Dashboard;

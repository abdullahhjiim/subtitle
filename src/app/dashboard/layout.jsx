"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import { SessionProvider } from "next-auth/react";


const Dashboard = ({children}) => {
  return (
    <div className="container mx-auto p-8 flex min-h-[90vh]">
      <SessionProvider>
      <Sidebar />
      {children}
      </SessionProvider>
    </div>
  );
};

export default Dashboard;

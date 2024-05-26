import Login from "@/components/auth/Login";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
const LoginPage = async () => {
  const session = await auth();
  if(session?.user) {
    redirect('/dashboard');
  }
  return (
    <div className="">
      <Login />
    </div>
  );
};

export default LoginPage;

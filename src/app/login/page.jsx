import Login from "@/components/auth/Login";
import { auth } from "../../../auth";
const LoginPage = () => {
  const session = auth();
  if(session?.user) {
    redirect('/');
  }
  return (
    <div className="">
      <Login />
    </div>
  );
};

export default LoginPage;

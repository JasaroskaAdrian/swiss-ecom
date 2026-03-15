
import { Outlet } from "react-router-dom";
import Auth from "../components/Auth";

const AuthLayout = () => {
  return (
    <>
      <Auth />
      
      <Outlet />
    </>
  )
}

export default AuthLayout
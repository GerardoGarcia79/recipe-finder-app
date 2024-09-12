import { Outlet } from "react-router-dom";
import MenuPanel from "../components/MenuPanel";

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full divide-x-2 divide-gray-100">
      <MenuPanel />
      <Outlet />
    </div>
  );
};

export default Layout;

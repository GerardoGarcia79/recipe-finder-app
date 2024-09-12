import recipes from "../assets/recipes.png";
import { FaHome } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const MenuPanel = () => {
  return (
    <div className="md:w-1/6 bg-white p-4 flex flex-col ">
      <Link to="/">
        <div className="flex justify-center">
          <img src={recipes} className="w-48" />
        </div>
      </Link>
      <ul className="flex flex-col mt-3 md:mt-16">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active underline underline-offset-2"
              : ""
          }
        >
          <li className="flex items-center justify-center mb-3">
            <FaHome size="24px" />
            <p className="text-xl ml-1">Home</p>
          </li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active underline underline-offset-2"
              : ""
          }
        >
          <li className="flex items-center justify-center">
            <AiOutlineHeart size="24px" />
            <p className="text-xl ml-1">Favorites</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default MenuPanel;

import recipes from "../assets/recipes.png";
import { FaHome } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const AsidePanel = () => {
  return (
    <div className="md:w-1/6 bg-white p-4 flex flex-col ">
      <div className="flex justify-center">
        <img src={recipes} className="w-48" />
      </div>
      <ul className="flex flex-col mt-3 md:mt-16">
        <li className="flex items-center justify-center mb-3">
          <FaHome size="24px" />
          <p className="text-xl ml-1">Home</p>
        </li>
        <li className="flex items-center justify-center">
          <AiOutlineHeart size="24px" />
          <p className="text-xl ml-1">Favorites</p>
        </li>
      </ul>
    </div>
  );
};

export default AsidePanel;

// import { AiFillHeart } from "react-icons/ai"; <AiFillHeart />
// import { AiOutlineHeart } from "react-icons/ai"; <AiOutlineHeart />

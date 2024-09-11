import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { PiHeartbeat } from "react-icons/pi";

const RecipeCard = () => {
  return (
    <div className="bg-green-500 p-2 rounded-lg">
      <div className="w-full h-[150px] overflow-hidden relative rounded-lg">
        <img
          src="https://edamam-product-images.s3.amazonaws.com/web-img/88e/88edb31264dc1e58b37c2fec3f99a244.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJIMEYCIQD4mcyh%2Bk%2FaE9gCh%2FtX91WyiBCjwsPL3XwUUyIKHOWi2wIhAMVXpjw%2F8N8K20Lj4ohTADzwZfvePkfr4MAQGxRy%2BxCfKsEFCI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igz6WC7jB2%2FPeolMPzoqlQX9M1hdGOqWpBtBPuhzW3dGneZTSNXP0LyX3QLCRvoQ1lk6ZfjmP9O%2F8JsMan61sOJ7i4cm%2Fny%2Bo7NM7mV51EgoULqiokO78KVFkv4TtUH%2BcvEU6kBYNqmNVf7ZrabTTBC2dgw6LahbSdY%2BfP8WfNJ%2Bgc%2F67PRiPsq39xFcLDeW4i1SZHoxF8aPQzdUhqakv9%2BCrUtPyp95t9d4KNOrxzzgDLRKg5qL9uzD8xPUZFpiaSweHxkrRX1JezupZq8tOwROETWqvUe67mJsEINd1e8rXyw80YnaFuGEO9hqJlsIGtdtwSTLjdbHeYBbb%2B5iqVZN5F37KOe1Kw9%2BuuFQxp%2BHBnSpc6zf8Uqt5wHeaNUgxsz1hWXSFD24VE56GtwwJRdI%2Fi%2F7N0YkmGVCk1r7Ha9cddm%2FeOWfUR%2B5ppO%2FWPWlAWaR16hO4k5UI65OM%2FG7NFXMbZRSZuLw6dkEFUOWFcWVxFg860RmPK8YBfCazwEhjSCCpKFKUVH6LC0xp3Z4XgqNGxHPXZrmA%2BA55J7QSqAwN1PrwBXGN99d9XYQCD%2F4XFzc2r2jo%2BQpa3s8ouFeKjiJ1Q%2FASxsL9FfHYeTcOXahVFdNhdswOffTBGirBpSJnutn%2BJKxMF9tXyHdmqyKOIr65j0dlGS5ZrN8iLMHnWUZ7%2BNDDEy4ofnUb%2BPqhzvW9NpCkRr8ec2MmAjl29hZj1k0QRMnD3fh4b6W0yNANVNuaws8acuTzbGoIzyj3sK%2BCU2YvG3KiwrklFY%2FF4ZcTbx1mYCi5s0DuqwSsIqbxR7C2WIerILoAeyzMFtxEUGolvl4IqtKt7RZPOxck%2BVf2sU49rpMHh7PQc%2F0rVOac7%2F6hVj03ttdCE4dAAgXW79cirvZiKK%2BMMHBhrcGOrABNbwG8AwHvaPVWT3YwAH3svsOFCarMsQURxHt%2FvgCASQY4G7bWo2o8XGdkllCjMQPyXVRexAnhKrq0TCOxBLPcCSDSmqBeG%2Bn7RlgjiPR5cqQ9wm%2BLby8gP%2BXzHHap5V4inX8MkB9OrB1BWWvJfYzBFYl8We32g5E3S2oKxZXyjvX%2FXjdiMHNqyNzWWcpekQdl5K%2FsZxbAF0iA%2BlG56QlJXMPrjYPxlces3q77%2BQdmsg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240911T154028Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFFS3YMN3N%2F20240911%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=60c4c3831362dd15563bd63b9e6fe92ecdd6431fc23066ae086638a8c174eb02"
          alt=""
          className="w-full relative bottom-10"
        />
        <span className="absolute bottom-1 left-1 bg-white w-[85px] flex items-center rounded-full opacity-85">
          <MdOutlineSoupKitchen className="ml-[2px]" />
          <p className="text-sm">4 Servings</p>
        </span>
        <button className="absolute top-1 right-1 bg-white w-7 h-7 rounded-full flex justify-center items-center opacity-75">
          <AiOutlineHeart size="24px" />
        </button>
      </div>
      <div>
        <h2 className="font-bold text-base">Jamaican jerk chicken</h2>
        <p className="mt-1 mb-1 text-base">American kitchen</p>
        <div className="flex">
          <span className="flex bg-green-700 items-center rounded-md">
            <PiHeartbeat className="m-[2px]" />
            <p className="text-sm font-semibold m-[2px]">Sugar-Conscious</p>
          </span>
          <span className="flex bg-green-700 items-center rounded-md ml-3">
            <PiHeartbeat className="m-[2px]" />
            <p className="text-sm font-semibold m-[2px]">Keto-Friendly</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

// import { AiFillHeart } from "react-icons/ai"; <AiFillHeart />
// import { AiOutlineHeart } from "react-icons/ai"; <AiOutlineHeart />

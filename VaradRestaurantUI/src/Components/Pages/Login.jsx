import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import DeliveryBoyImg from "../../assets/foodDeliveryIMG.jpg";

const Login = () => {
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row h-3/4 mt-2">
      <div className="mt-7 md:w-full md:w-1/2 flex justify-center items-center">
        <img
          src={DeliveryBoyImg}
          alt="Food Delivery Boy logo"
          className="w-3/4"
        />
      </div>
      <div className="mt-7 md:w-full md:w-1/2 flex flex-col justify-center items-center space-y-5">
        <input
          type="text"
          placeholder="Email Address"
          className="w-3/4 border p-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-3/4 border p-3 rounded focus:border-orange-300"
        />

        <button className="w-3/4 bg-[#ff8035] text-white py-2 rounded cursor-pointer">
          Login
        </button>
        <div>Don't have an Account?</div>
        <button className="w-3/4 bg-[#ff8035] text-white py-2 rounded cursor-pointer">
          Signup
        </button>
        <button className="w-1/2 flex justify-center items-center gap-3 bg-white text-black py-2 rounded cursor-pointer">
          <FcGoogle /> Continue with Google
        </button>
        <button className="w-1/2 flex items-center justify-center gap-3 bg-white text-black py-2 rounded cursor-pointer">
          <FaGithub />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;

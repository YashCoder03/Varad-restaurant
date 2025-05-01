import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import foodRegisterbg from "../../assets/foodRegisterbg.mp4"
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row h-3/4 mt-2">
      <div className="mt-7 md:w-full md:w-1/2 flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="px-4"
        >
          <source src={foodRegisterbg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="my-15 md:w-full md:w-1/2 flex flex-col justify-center items-center space-y-5">
        <input
          type="text"
          placeholder="Enter Fullname"
          className="w-3/4 border p-3 rounded"
        />
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
          Signup
        </button>
        <div>Already have an Account?</div>
        <button onClick={() => navigate('/login')} className="w-3/4 bg-[#ff8035] text-white py-2 rounded cursor-pointer">
          Login
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

export default Register;

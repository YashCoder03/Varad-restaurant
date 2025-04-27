import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <h1>This is Logo</h1>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-5">
        <button className="w-1/2 flex items-center justify-center gap-3 bg-white text-black py-2 rounded cursor-pointer">
        <FaGithub />
          Continue with GitHub
        </button>
        <button className="w-1/2 flex justify-center items-center gap-3 bg-white text-black py-2 rounded cursor-pointer">
            <FcGoogle /> Continue with Google
        </button>

        <input
          type="text"
          placeholder="Email Address"
          className="w-3/4 border p-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-3/4 border p-3 rounded"
        />

        <button className="w-3/4 bg-blue-600 text-white py-2 rounded cursor-pointer">
          Login
        </button>
        <div>Don't have an Account?</div>
        <button className="w-3/4 bg-blue-600 text-white py-2 rounded cursor-pointer">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;

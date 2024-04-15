import LoginForm from "@/components/LoginForm";
import { handleGithubLogin,handleLogin } from "@/lib/actions";

const LoginPage = () => {


  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-left my-4 text-lg text-white">
          blog<span className=" text-slate-50 font-thin">post</span>{" "}
        </h2>
        <LoginForm/>
        <div className="mt-4 text-center">
          <form action={handleGithubLogin}>
          <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">
            Login with GitHub
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

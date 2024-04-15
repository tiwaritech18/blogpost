import RegisterForm from "@/components/RegisterForm";

const RegistrationPage = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full mx-auto px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-left my-4 text-lg text-white">
          blog<span className=" text-slate-50 font-thin">post</span>{" "}
        </h2>
       <RegisterForm/>
      </div>
    </div>
  );
};

export default RegistrationPage;

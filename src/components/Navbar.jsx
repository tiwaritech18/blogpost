import { auth } from "@/lib/auth";
import Links from "./Links";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="container relative bg-black py-8 text-white flex justify-between items-center border-b border-b-slate-900  ">
      <div className="logo">
        <h2>
          blog<span className=" text-slate-50 font-thin">post</span>{" "}
        </h2>
      </div>
      <Links session={session} />
    </nav>
  );
};

export default Navbar;

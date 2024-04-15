"use client";

import { handleGithubLogut } from "@/lib/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

 

  return (
    <>
      <div className="hidden md:flex md:items-center gap-8 text-white ">
        {navLinks.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathname === link.path && "active"
            } text-sm hover:text-slate-400`}
          >
            {link.title}
          </Link>
        ))}
        {session?.user ? (
          <>
           {session?.user?.isAdmin && <Link href="/admin" />}
            <form action={handleGithubLogut}>
              <button className="bg-white text-black rounded-2xl outline-none px-4 py-1 text-sm transition-all ease-in duration-300 hover:bg-slate-300 hover:text-slate-950">
                Logut
              </button>
            </form>
          </>
        ) : (
          <Link href='/login' className="bg-white text-black rounded-2xl outline-none px-4 py-1 text-sm transition-all ease-in duration-300 hover:bg-slate-300 hover:text-slate-950">Login</Link>
        )}
      </div>
      <div className="bg-white">
        <button
          onClick={() => setOpen(!open)}
          className={`flex md:hidden absolute top-50% right-10 z-30 text-white ${
            open ? "rotate-180" : "rotate-90"
          }`}
        >
          |||
        </button>
        {open && (
          <div className="fixed bg-black top-0 right-0 w-80 p-8 h-full flex flex-col gap-8 items-center justify-center z-20">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.title}
                className={`${
                  pathname === link.path && "active"
                } text-sm hover:text-slate-400`}
              >
                {link.title}
              </Link>
            ))}
            <form action="">
              <button className="text-white border px-1 py-3 rounded-md">
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Links;

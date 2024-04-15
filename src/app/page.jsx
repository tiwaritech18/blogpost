import Image from "next/image";
import heroImg from "../../public/images/blog-homepage.webp"
import brandsImg from "../../public/images/brands.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex ">
      <div className=" mt-8 md:mt-14 lg:mt-32 flex-1 flex flex-col gap-12 relative z-10">
        <h1 className="text-6xl lg:text-6xl  text-white md:text-left">Creative Thoughts Agency</h1>
        <p className="text-white text-sm md:text-l md:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur sequi, facere soluta, dolorem odio eius adipisci dicta exercitationem aliquam non rem eum aut iusto sapiente dolores doloribus doloremque! Nam.</p>
        <div className="flex gap-5 justify-center md:justify-start">
          <Link href="/writeblog"><button className="bg-black rounded-3xl px-5 py-2 text-white border border-white hover:bg-slate-200 hover:text-black transition-all ease-linear  duration-300">Create Blog</button></Link>
          <Link href="/blog">

          <button className="bg-white text-black px-5 py-2 rounded-3xl hover:bg-yellow-200 hover:text-black transition-all ease-linear  duration-300">Blogs</button>
          </Link>
        </div>
        <div className="">
          <Image  width={350} height={50} src={brandsImg} alt="brands"/>
        </div>
      </div>
        <div className="absolute z-0 opacity-20 md:relative md:flex-1 md:flex md:items-center md:justify-center md:opacity-100">
          <Image  width={450} height={450} src={heroImg} alt="heroImg"/>
        </div>
    </main>
  );
}

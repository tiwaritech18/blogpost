import Link from 'next/link'
import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className='text-white w-68 border-slate-800 border'>
      <div className="flex ">
        {/* <Image src={post.img} width={200} height={350} alt='single-blog-img'/> */}
        <span className='rotate-90 my-auto text-sm'>{}</span>
      </div>
      <div className="text-left w-60">
        <h1 className='text-left font-bold'>{post.title}</h1>
        <p className='text-left text-sm w-full text-slate-400'>{post.desc.slice(0,50)}...</p>
        <Link href={`/blog/${post.slug}`}className='underline hover:text-slate-200'>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard

import Image from 'next/image';
import singleBlog from"../../../../public/images/nextimage3.png"
import PostUser from '@/components/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';



const SingleBlogPage = async ({params}) => {
    const {slug} = params;

    const post = await getPost(slug)
    

    return (
        <div className="bg-black text-white py-16 px-4">
          
            <div className="container mx-auto">
                <div className="lg:flex items-center mb-12">
                    <div className="lg:w-1/2 lg:mr-12 relative">
                        <div className="h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
                           <Image
                                src={singleBlog}
                                alt="Blog Image"
                                width={400}
                                height={700}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25 hover:opacity-50 transition-all duration-300"></div> {/* Overlay gradient */}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white shadow-md"> {/* Subtle drop shadow */}
                            {post?.title}
                        </h1>
                        <div className="flex items-center mb-6">
                            <div className="rounded-full overflow-hidden mr-4">
                                <Image
                                    src={singleBlog}
                                    alt="Blog Image"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            {post && <Suspense fallback={<div>Loading...</div>}>

                           <PostUser userId={post.userId} />
                            </Suspense>}
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Published on September 20, 2024
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {post?.desc}
                        </p>
                        {/* Social Sharing Buttons and CTA Button */}
                        <div className="inline-flex">
                            
                            <a href="https://www.twitter.com/share" className="inline-flex items-center text-gray-400 hover:text-white mr-2">
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M6.29 10.29a1 1 0 0 1 0 1.414l3.71 3.71a1 1 0 0 1-1.414 1.414l-3.71-3.71a1 1 0 0 1 0-1.414zM4 11a7 7 0 1 1 14 0a7 7 0 0 1-14 0z" clipRule="evenodd" fillRule="evenodd" />
                                </svg>
                                <span className="ml-2">Tweet</span>
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_BLOG_POST_URL" className="inline-flex items-center text-gray-400 hover:text-white mr-2">
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13 8V6h-1a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H6v2h1v6h3v-6h2l1-2h-3V8h3zm2-2h2V4h-2V2h-2v2h-2v2h2v2h2V6zM8 15v-3H6v-2h2V8H6V6h2V4H6V2H4v15h4v-2H6zm-2 0V6h1.5v9H6zm5 0V6H9v9h2zm3-5h2V8h-2v2zm0-2h2V6h-2v2zm0-2h2V4h-2v2zm0-2h2V2h-2v2z" />
                                </svg>
                                <span className="ml-2">Share</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogPage;

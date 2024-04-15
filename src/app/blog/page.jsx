import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/data";

const Blog = async () => {
  
  const posts = await getPosts()
  

  return (
    <div className="container mt-8 md:mt-14 lg:mt-16 flex flex-wrap gap-8 justify-center">
      {posts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Blog;

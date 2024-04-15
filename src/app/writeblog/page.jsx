import { addBlog } from "@/lib/actions";

const BlogPostPage = () => {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">Create a New Blog Post</h2>
        <form action={addBlog}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="title">Title</label>
            <input
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
              type="text"
              id="title"
              name="title"
              required
            />
            <input type="hidden"  />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="desc">desc</label>
            <textarea
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
              id="desc"
              name="desc"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            
          </div>
          <button
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200 cursor-pointer"
            type="submit"
          >
            Submit Blog Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostPage;

import { auth } from "../../../auth";
import BlogList from "./BlogList";
import BlogSearch from "./BlogSearch";
import LatestBlog from "./LatestBlog";
import PopularBlog from "./PopularBlog";


const BlogPage = async () => {

  const session = await auth();

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-cyan-900 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="mt-4 text-lg">
          Stay updated with the latest news and articles
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Blog Posts Section */}
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-col gap-4">
              <BlogList />
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-4/12 px-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <BlogSearch  />
            </div>

           {session?.user && <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <PopularBlog />
            </div>} 
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <LatestBlog />
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

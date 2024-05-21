import BlogList from "./BlogList";
import BlogSearch from "./BlogSearch";
import PopularBlog from "./PopularBlog";


const categories = [
  "React",
  "JavaScript",
  "CSS",
  "Tailwind CSS",
  "Web Development",
];

const recentPosts = [
  "Getting Started with Next.js",
  "Understanding Async/Await in JavaScript",
  "Responsive Design with Flexbox",
];

const BlogPage = () => {
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
              <BlogSearch />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <PopularBlog />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-2">
                {recentPosts.map((post, index) => (
                  <li key={index} className="text-blue-600 hover:underline">
                    {post}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

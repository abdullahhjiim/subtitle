import Link from "next/link";

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    summary: 'A comprehensive guide to understanding and using React Hooks in your projects.',
    imageUrl: 'https://via.placeholder.com/600x400',
    date: 'May 20, 2023',
    author: 'Jane Doe',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    summary: 'Learn how to effectively use Tailwind CSS to style your web applications.',
    imageUrl: 'https://via.placeholder.com/600x400',
    date: 'June 10, 2023',
    author: 'John Smith',
  },
  // Add more blog posts here
];

const categories = [
  'React',
  'JavaScript',
  'CSS',
  'Tailwind CSS',
  'Web Development',
];

const recentPosts = [
  'Getting Started with Next.js',
  'Understanding Async/Await in JavaScript',
  'Responsive Design with Flexbox',
];

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="mt-4 text-lg">Stay updated with the latest news and articles</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Blog Posts Section */}
          <div className="w-full lg:w-8/12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <div className="text-gray-500 text-sm mb-4">
                      <span>{post.date}</span> - <span>{post.author}</span>
                    </div>
                    <Link href={'/blog/1'} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-4/12 px-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="text-blue-600 hover:underline">
                    {category}
                  </li>
                ))}
              </ul>
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

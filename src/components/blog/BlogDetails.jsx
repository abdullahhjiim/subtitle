import {
    blogPost,
    categories,
    recentPosts,
    relatedPosts
} from './data';

const BlogDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header/Banner */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Blog Details</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Blog Post Content */}
          <div className="w-full lg:w-8/12 px-4">
            <article className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <img className="w-full h-64 object-cover rounded-t-lg" src={blogPost.imageUrl} alt={blogPost.title} />
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">{blogPost.title}</h2>
                <div className="text-gray-500 text-sm mb-4">
                  <span>{blogPost.date}</span> - <span>{blogPost.author}</span>
                </div>
                <div className="prose" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
              </div>
            </article>

            {/* Comment Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4">Comments</h3>
              {/* Add Comment Form */}
              <form className="mb-6">
                <textarea
                  className="w-full p-4 border rounded-lg mb-4"
                  rows="4"
                  placeholder="Write a comment..."
                ></textarea>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Submit
                </button>
              </form>
              {/* Display Comments */}
              <div>
                <div className="border-b pb-4 mb-4">
                  <p><strong>John Doe:</strong> Great post! Very informative.</p>
                  <p className="text-gray-500 text-sm">May 21, 2023</p>
                </div>
                {/* Add more comments as needed */}
              </div>
            </section>

            {/* Related Posts */}
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-32 object-cover" src={post.imageUrl} alt={post.title} />
                    <div className="p-4">
                      <h4 className="font-bold text-lg">{post.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
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

export default BlogDetails;

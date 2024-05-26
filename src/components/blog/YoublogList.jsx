import { formatHumanReadableDate } from "@/helpers/utility";

/* eslint-disable @next/next/no-img-element */
const YoublogList = async ({ blogs }) => {
  return (
    <div className="">
      {blogs.map((blog, i) => {
        return (
          <div className="blog-card my-2" key={i}>
            <img
              className="blog-thumb"
              src="/assets/blogs/Underrated.jpg"
              alt=""
            />
            <div className="mt-2">
              <h3 className="text-slate-300 text-xl lg:text-2xl">
                {blog?.title}
              </h3>
              <p className="mb-6 text-base text-slate-500 mt-1">
                {blog?.content}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center capitalize space-x-2">
                  <div className="avater-img bg-indigo-600 text-white">
                    <span className="">{blog?.author?.name[0]}</span>
                  </div>

                  <div>
                    <h5 className="text-slate-500 text-sm">
                      {blog.author?.name}
                    </h5>
                    <div className="flex items-center text-xs text-slate-700">
                      <span>
                        {formatHumanReadableDate(new Date(blog.createdAt))}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-sm px-2 py-1 text-slate-700">
                  <span>{blog.likes.length} Likes</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YoublogList;

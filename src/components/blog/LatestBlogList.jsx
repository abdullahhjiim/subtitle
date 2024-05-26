import { getLatestBlog } from "@/lib/blog";
import Link from "next/link";

const LatestBlogList = async () => {
  const data = await getLatestBlog();

  return (
    <ul className="space-y-5 my-5">
      {data?.blogs?.length == 0 && <p>No popular blogs found</p>}
      {data?.blogs.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={`/blog/${item._id}`}
              className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
            >
              {item.title}
            </Link>
            <p className="text-slate-600 text-sm">
              by
              <Link href={`/blog/profile/${item.author.id}`} className="ml-2">
                {item.author?.name} 
              </Link>
              <span>·</span> {item.likes?.length} Likes
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default LatestBlogList;

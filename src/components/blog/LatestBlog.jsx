import { Suspense } from "react";
import LatestBlogList from "./LatestBlogList";

const LatestBlog = () => {
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Latest Blog
      </h3>
      <Suspense fallback={<p>Loading...</p>}>
        <LatestBlogList />
      </Suspense>
    </div>
  );
};

export default LatestBlog;

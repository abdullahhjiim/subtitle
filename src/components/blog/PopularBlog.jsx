import PopularBlogList from "./PopularBlogList";

const PopularBlog = () => {
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Favourite Blog 👍️
      </h3>
        <PopularBlogList />
    </div>
  );
};

export default PopularBlog;

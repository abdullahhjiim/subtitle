import { getProfileData } from "@/app/actions";
import YoublogList from "@/components/blog/YoublogList";

/* eslint-disable @next/next/no-img-element */
const BlogProfile = async ({ params }) => {
  const data = await getProfileData(params.id);

  const { user, blogs } = data;

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <div className="flex flex-col items-center py-8 text-center">
          <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
            <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
              <span className="">{user?.name[0]}</span>
            </div>

            <button className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80">
              <img src="/assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
              {user?.name}
            </h3>
            <p className="leading-[231%] lg:text-lg">{user?.email}</p>
          </div>

          <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">
              <p className="leading-[188%] text-gray-400 lg:text-lg">{user?.bio}</p>
            </div>
            <button className="flex-center h-7 w-7 rounded-full">
              <img src="/assets/icons/edit.svg" alt="Edit" />
            </button>
          </div>
          <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>

        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
        <div className="my-6 space-y-4">
          <YoublogList blogs={blogs} />
        </div>
      </div>
    </main>
  );
};

export default BlogProfile;

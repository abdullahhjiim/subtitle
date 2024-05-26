"use client";

const BlogCommentForm =  ({blogId}) => {

    const onSubmit = async (formData) => {
        const data = { 'content' : formData.get("content")}
        try{
    
          const response = await fetch(`/api/blogs/${blogId}/comment`,{
            method : "POST",
            body: JSON.stringify(data)
          });
          
          window.location.reload();
          
        }catch(err){
          console.log(err);
        }
    }

    // const onSubmit = async (formData) => {
    //     "use server";

    //     const data = { 'content' : formData.get("content")}
    //     try{
    
    //       const response = postComment(data, blogId);

    //       console.log(response);
    //       if(response) {
    //         revalidatePath(`/blog/${blogId}`);
    //       }
          
    //     }catch(err){
    //       console.log(err);
    //     }
    // }

    return (
        <form action={onSubmit} className="w-full">
            <div className="w-full">
              <textarea
                name="content"
                required
                className="w-full border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 md:py-3 mb-2  rounded-md hover:bg-indigo-700 transition-all duration-200">
                  Comment
                </button>
              </div>
            </div>
          </form>
    )
}

export default BlogCommentForm;
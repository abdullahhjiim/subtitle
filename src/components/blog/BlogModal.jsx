import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BlogModal({ isOpen, setIsOpen, refetch }) {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {

    try {

      const response = await fetch('/api/blogs',{
        method : "POST",
        body: JSON.stringify(data)
    })
      
      if(response?.status == 201) {
        reset();
        setIsOpen();
        refetch();
      }

    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>
      <Dialog open={isOpen} handler={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>Blog Create</DialogHeader>
          <DialogBody>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className={`w-full p-2 border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded mt-1`}
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className={`w-full p-2 border ${
                  errors.content ? "border-red-500" : "border-gray-300"
                } rounded mt-1`}
                {...register("content", { required: "Content is required" })}
              ></textarea>
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.content.message}
                </p>
              )}
            </div>


            {/* <div className="mb-4">
              <label htmlFor="thumbnail" className="block text-gray-700">
                Thumbnail URL
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                className={`w-full p-2 border ${
                  errors.thumbnail ? "border-red-500" : "border-gray-300"
                } rounded mt-1`}
                {...register("thumbnail", {
                  required: "Thumbnail URL is required",
                  pattern: {
                    value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                    message: "Invalid URL",
                  },
                })}
              />
              {errors.thumbnail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.thumbnail.message}
                </p>
              )}
            </div> */}

            <div className="mb-4">
              <label htmlFor="tags" className="block text-gray-700">
                Tags
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                className={`w-full p-2 border ${
                  errors.tags ? "border-red-500" : "border-gray-300"
                } rounded mt-1`}
                {...register("tags", {
                  required: "At least one tag is required",
                })}
              />
              {errors.tags && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tags.message}
                </p>
              )}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={setIsOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="cyan" type="submit">
              <span>Create Blog</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

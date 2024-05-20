// pages/release.js

import UploadForm from "@/components/upload/UploadForm";

const ReleasePage = () => {
  return (
    <div className="ml-8 w-full">
      <div className="flex justify-between gap-12 rounded-md bg-gray-100 p-8">
        <div className="w-1/2 flex justify-center ml-8">
          <div>
            <h3 className="text-2xl font-bold p-2 mb-4 ">Upload Subtitle</h3>

            <img
              src="https://i.ytimg.com/vi/hRBHeFKmxo0/sddefault.jpg"
              alt="Release Image"
              className="w-full h-80 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2">Release Information</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus impedit quaerat atque! Delectus mollitia repellendus
              autem voluptatum beatae tenetur libero ad tempore deleniti nisi
              laudantium maxime sapiente optio enim est dolor, ex nemo fugit,
              tempora ducimus facilis eligendi. Sed dolore magnam placeat est
              ratione, laudantium dicta enim aperiam autem porro tenetur? Nobis
              dignissimos exercitationem unde sunt quo quas voluptates quis
              assumenda suscipit neque dolorem odit repudiandae, harum illum
              quasi sed similique! Corporis deserunt distinctio quod. Nisi non
              nemo vitae nam quam quaerat dolorem ad quisquam numquam, natus cum
              quibusdam eveniet perferendis praesentium sequi enim incidunt,
              sunt laboriosam inventore sapiente? Autem!
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center p-8">
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default ReleasePage;

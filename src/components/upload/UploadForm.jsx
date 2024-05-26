"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';

const UploadForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  async function onHandleSubmit (data) {

    try {

      const res = await fetch("/api/subtitle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(res.status === 201) {
        reset();
      }
    } catch (error) {
      setError(error.message);
    }
  }


  const onSubmit = (data) => {
    onHandleSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">File Path</label>
        <input
          {...register('filePath', { required: 'File Path is required' })}
          className={`w-full px-3 py-2 border ${errors.filePath ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.filePath && <p className="text-red-500 text-sm mt-1">{errors.filePath.message}</p>}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Release Name</label>
        <input
          {...register('releaseName', { required: 'Release Name is required' })}
          className={`w-full px-3 py-2 border ${errors.releaseName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.releaseName && <p className="text-red-500 text-sm mt-1">{errors.releaseName.message}</p>}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Release Info</label>
        <textarea
          {...register('releaseInfo', { required: 'Release Info is required' })}
          className={`w-full px-3 py-2 border ${errors.releaseInfo ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.releaseInfo && <p className="text-red-500 text-sm mt-1">{errors.releaseInfo.message}</p>}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Runtime</label>
        <input
          {...register('runtime', { required: 'Runtime is required' })}
          className={`w-full px-3 py-2 border ${errors.runtime ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.runtime && <p className="text-red-500 text-sm mt-1">{errors.runtime.message}</p>}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Release Type</label>
        <input
          {...register('releaseType', { required: 'Release Type is required' })}
          className={`w-full px-3 py-2 border ${errors.releaseType ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.releaseType && <p className="text-red-500 text-sm mt-1">{errors.releaseType.message}</p>}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Production Type</label>
        <input
          {...register('productionType', { required: 'Production Type is required' })}
          className={`w-full px-3 py-2 border ${errors.productionType ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.productionType && <p className="text-red-500 text-sm mt-1">{errors.productionType.message}</p>}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Select Framerate</label>
        <select
          {...register('framerate', { required: 'Framerate is required' })}
          className={`w-full px-3 py-2 border ${errors.framerate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        >
          <option value="">Select Framerate</option>
          <option value="24">24 FPS</option>
          <option value="30">30 FPS</option>
          <option value="60">60 FPS</option>
        </select>
        {errors.framerate && <p className="text-red-500 text-sm mt-1">{errors.framerate.message}</p>}
      </div>
      <button type="submit" disabled={loading} className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-md">
        {loading ? 'Uploading...' : 'Upload'} 
      </button>
    </form>
  );
};

export default UploadForm;

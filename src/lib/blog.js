import { BASE_URL } from "@/helpers/config";

export const getPopularBlog = async () => {
    try{
        const res = await fetch(`${BASE_URL}/api/blogs/favourite`, {cache : 'no-store'});
        return await res.json();
    }catch (err){
        console.log(err)
    }
}

export const getLatestBlog = async () => {
    try{
        const res = await fetch(`${BASE_URL}/api/blogs/latest`);
        return await res.json();
    }catch (err){
        console.log(err)
    }
}

export const getBlogDetail = async (id) => {
    try{
        const res = await fetch(`${BASE_URL}/api/blogs/${id}`, {cache : "no-store"});
        return await res.json();
    }catch(err){
        console.log(err)
    }
}
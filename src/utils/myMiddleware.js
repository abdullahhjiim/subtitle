import { auth } from "../../auth";
export default async function myMiddleware (){
    
    const sesssion = await auth();

    return sesssion;
}
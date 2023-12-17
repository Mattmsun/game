import ApiClient from "./ApiClient";
 
export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export const platformService = new ApiClient<Platform>('/platforms/lists/parents')
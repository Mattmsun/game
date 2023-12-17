import ApiClient from "./ApiClient";
 
export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface PlatformResponse{
    count:number;
    results: Platform[]
}
export const platformService = new ApiClient<PlatformResponse>('/platforms/lists/parents')
import ApiClient from "./ApiClient";
import Platform from "../entities/Platform";
 
export const platformService = new ApiClient<Platform>('/platforms/lists/parents')
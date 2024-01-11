import ApiClient from "./ApiClient";
import  Genre  from "../entities/Genre";

export const genreService =  new ApiClient<Genre>("/genres")

import ApiClient from "./ApiClient";

export interface Genre{
    id:number;
    name:string;
    image_background:string
}

export const genreService =  new ApiClient<Genre>("/genres")

import ApiClient from "./ApiClient";

export interface Genre{
    id:number;
    name:string;
    image_background:string
}

export interface GenreResponse{
    count:number;
    results: Genre[]
}
export const genreService =  new ApiClient<GenreResponse>("/genres")

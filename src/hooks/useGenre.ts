
// import useData from "./useData";
//  export interface Genre{
//     id:number;
//     name:string;
//     image_background:string
// }
// const useGenre= ()=> useData<Genre>("/genres")
// export default useGenre
import genres from "../data/genres"
import {  useQuery } from "@tanstack/react-query"
import {  GenreResponse, genreService } from "../services/genreService"
const useGenre = ()=>{
    return useQuery<GenreResponse,Error>({
        queryKey:["genres"],
        queryFn: genreService.getAll,
        staleTime:24*60*60*1000,
        initialData:genres
      })   
}
export default useGenre
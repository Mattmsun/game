
import genres from "../data/genres"
import {  useQuery } from "@tanstack/react-query"
import {  Genre,  genreService } from "../services/genreService"
import { FetchResponse } from "../services/ApiClient"
const useGenre = ()=>{
    return useQuery<FetchResponse<Genre>,Error>({
        queryKey:["genres"],
        queryFn: genreService.getAll,
        staleTime:24*60*60*1000,
        initialData:genres
      })   
}
export default useGenre

import genres from "../data/genres"
import {  useQuery } from "@tanstack/react-query"
import {  genreService } from "../services/genreService"
import  Genre  from "../entities/Genre"
import { FetchResponse } from "../services/ApiClient"
import ms from "ms"
const useGenre = ()=>{
    return useQuery<FetchResponse<Genre>,Error>({
        queryKey:["genres"],
        queryFn: genreService.getAll,
        staleTime:ms("24h"),
        initialData:genres
      })   
}
export default useGenre
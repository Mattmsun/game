
import { useInfiniteQuery } from "@tanstack/react-query"
import {  gameService } from "../services/gameServices"
import { GameQuery } from "../App"
import ms from "ms"



const useGame = (gameQuery: GameQuery)=>{


  return useInfiniteQuery({
  queryKey:["games",gameQuery],
  queryFn: ({pageParam =1 })=>gameService.getAll( {params:{genres:gameQuery.genreId,
    parent_platforms:gameQuery.platformId,
    ordering:gameQuery.ordering?.value,
    search: gameQuery.searchText,
    page_size: gameQuery.page_size ,
    page:pageParam
  }}),
  getNextPageParam:(lastPage,allPages)=>{
    return lastPage.next? allPages.length +1:undefined
  },
  initialPageParam:1,
  staleTime:ms("24h"),
   
  })   
}

export default useGame
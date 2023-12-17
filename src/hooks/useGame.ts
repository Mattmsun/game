
import { useQuery } from "@tanstack/react-query"
import { GameResponse, gameService } from "../services/gameServices"
import { GameQuery } from "../App"

const useGame = (gameQuery: GameQuery)=>{
  const requestConfig =  
  {params:{genres:gameQuery.genre?.id,
    parent_platforms:gameQuery.platform?.id,
    ordering:gameQuery.ordering?.value,
    search: gameQuery.searchText
  }}
  console.log(requestConfig)
  return useQuery<GameResponse,Error>({
      queryKey:["games",gameQuery],
      queryFn: ()=>gameService.get(requestConfig),
     
     
    })   
}
export default useGame
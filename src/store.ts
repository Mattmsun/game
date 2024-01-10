import { create } from "zustand";
import { Ordering } from "./components/SortSelector";
import { pageSize } from "./components/GameGrid";
 
interface GameQuery {
    genreId?: number;
    platformId?: number;
    ordering?: Ordering | null;
    searchText?: string;
    page_size?: number;
  }
interface GameQueryStore {
    gameQuery:GameQuery;
    setSearchText:(searchText:string)=>void;
    setGenreId:(genreId:number)=>void;
    setPlatformId: (platformId:number)=>void;
    setSortOrder:(sortOrder:Ordering)=>void
}
const useGameQueryStore =  create<GameQueryStore>(set=>({
    gameQuery:{page_size:pageSize},
    setSearchText:(searchText)=> set(()=>({gameQuery:{searchText}})),
    setGenreId:(genreId)=> set(store => ({gameQuery:{...store.gameQuery,genreId}})),
    setPlatformId:(platformId)=> set(store=>({gameQuery:{...store.gameQuery,platformId}})),
    setSortOrder:(sortOrder)=> set(store=>({gameQuery:{...store.gameQuery,ordering:sortOrder}}))


}))
export default useGameQueryStore
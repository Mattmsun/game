// import useData from "./useData"
// interface Platform{
//     id:number;
//     name:string;
//     slug:string;
// }
// const usePlatform = ()=> useData<Platform>("/platforms/lists/parents")
// export default usePlatform

import { useQuery } from "@tanstack/react-query";
import { PlatformResponse, platformService } from "../services/platformService";
import platforms from "../data/platforms";

const usePlatform =()=> useQuery<PlatformResponse,Error>({
    queryKey:["platforms"],
    queryFn:platformService.getAll,
    staleTime:24*60*60*1000,
    initialData:platforms
})
export default usePlatform

import { useQuery } from "@tanstack/react-query";
import { Platform, platformService } from "../services/platformService";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/ApiClient";

const usePlatform =()=> useQuery<FetchResponse<Platform>,Error>({
    queryKey:["platforms"],
    queryFn:platformService.getAll,
    staleTime:24*60*60*1000,
    initialData:platforms
})
export default usePlatform
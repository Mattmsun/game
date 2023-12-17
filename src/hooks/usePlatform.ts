
import { useQuery } from "@tanstack/react-query";
import { Platform, platformService } from "../services/platformService";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/ApiClient";
import ms from "ms"

const usePlatform =()=> useQuery<FetchResponse<Platform>,Error>({
    queryKey:["platforms"],
    queryFn:platformService.getAll,
    staleTime:ms("24h"),
    initialData:platforms
})
export default usePlatform